
using AutoMapper;
using WebApi.Models.Dto;
using WebApi.Models.Entities;
using WebApi.Repositories;

namespace WebApi.Service
{
    public class BookService : IBookService
    {
        private readonly IBookRepository _bookRepository;
        private readonly IMapper _mapper;

        public BookService(IBookRepository bookRepository, IMapper mapper)
        {
            _bookRepository = bookRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<BookDto>> GetAllBooks()
        {
            var books = await _bookRepository.GetAll();
            var bookDtos = _mapper.Map<IEnumerable<BookDto>>(books); // Utiliza Map para mapear una lista
            return bookDtos;
        }

        public async Task<BookDto> GetBookById(int id)
        {
            var book = await _bookRepository.GetById(id);
            return _mapper.Map<BookDto>(book);
        }

        public async Task<BookDto> Insert(BookPostDto bookPostDto)
        {
            var book = _mapper.Map<Book>(bookPostDto);
            var insertedBook = await _bookRepository.Insert(book);
            return _mapper.Map<BookDto>(insertedBook);
        }   

        public async Task<bool> UpdateBook(int id, BookPostDto bookPostDto)
        {
            var existingBook = await _bookRepository.GetById(id);
            if (existingBook == null)
            {
                return false;
            }

            _mapper.Map(bookPostDto, existingBook); // Actualizar propiedades
            await _bookRepository.Update(existingBook);
            return true;
        }

        public async Task<bool> SoftDeleteBook(int id)
        {
            return await _bookRepository.SoftDelete(id);
        }

    }
}
