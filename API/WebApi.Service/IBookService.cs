using WebApi.Models.Dto;

namespace WebApi.Service
{
    public interface IBookService
    {
        Task<IEnumerable<BookDto>> GetAllBooks();
        Task<BookDto> GetBookById(int id);
        Task<BookDto> Insert(BookDto book);
        Task<bool> UpdateBook(int id, BookDto bookDto);
        Task<bool> SoftDeleteBook(int id);
    }
}
