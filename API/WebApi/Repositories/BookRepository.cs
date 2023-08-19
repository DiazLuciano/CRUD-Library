﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using WebApi.Data.AccessData;
using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public class BookRepository : IBookRepository
    {
        private readonly MySqlDbContext _context;

        public BookRepository(MySqlDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Book>> GetAll()
        {
            return await _context.Books.Where(x => x.IsDeleted == false).ToListAsync();
        }

        public async Task<Book>? GetById(int id) 
            => await _context.Books.FirstOrDefaultAsync(x => x.Id == id && x.IsDeleted == false);

        public async Task<Book> Insert(Book book)
        {
            EntityEntry<Book> insertedBook = await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
            return insertedBook.Entity;
        }

        public async Task<bool> SoftDelete(int id)
        {
            var bookToDelete = await _context.Books.FindAsync(id);

            if (bookToDelete == null)
            {
                return false; // El libro no fue encontrado, no se puede eliminar.
            }

            bookToDelete.IsDeleted = true;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> Update(Book book)
        {
            var existingBook = await _context.Books.FindAsync(book.Id);

            if (existingBook == null)
            {
                return false; // El libro no fue encontrado, no se puede actualizar.
            }

            // Actualizar las propiedades necesarias del libro existente con los valores del libro proporcionado.
            existingBook.Title = book.Title;
            existingBook.Description = book.Description;
            existingBook.Stock = book.Stock;
            existingBook.CreatedDate = book.CreatedDate;
            //existingBook.Author = book.AuthorId;

            await _context.SaveChangesAsync();
            return true;
        }
    }
}
