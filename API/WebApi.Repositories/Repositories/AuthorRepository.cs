using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using WebApi.Data.AccessData;
using WebApi.Models.Entities;

namespace WebApi.Repositories.Repositories
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly MySqlDbContext _context;

        public AuthorRepository(MySqlDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Author>> GetAll()
        {
            return await _context.Authors
                .Where(x => x.IsDeleted == false)
                .Include(x => x.Books)
                .ToListAsync();
        }

        public async Task<Author>? GetById(int id)
        {
            return await _context.Authors
                .Where(x => x.Id == id && x.IsDeleted == false)
                .Include(x => x.Books)
                .FirstOrDefaultAsync();
        }

        public async Task<Author> Insert(Author author)
        {
            EntityEntry<Author> insertedAuthor = await _context.Authors.AddAsync(author);
            await _context.SaveChangesAsync();
            return insertedAuthor.Entity;
        }

        public async Task<bool> SoftDelete(int id)
        {
            var authorToDelete = await _context.Authors.FindAsync(id);

            if (authorToDelete == null)
            {
                return false; // El autor no fue encontrado, no se puede eliminar.
            }

            authorToDelete.IsDeleted = true;

            await _context.SaveChangesAsync();
            return true;
        }

        public async Task Update(Author author)
        {
            _context.Authors.Update(author);
            await _context.SaveChangesAsync();
        }
    }
}
