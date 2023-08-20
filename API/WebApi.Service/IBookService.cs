using WebApi.Models.Dto;

namespace WebApi.Service
{
    public interface IBookService
    {
        Task<IEnumerable<BookDto>> GetAllBooks();
        Task<BookDto> GetBookById(int id);
        Task<BookDto> Insert(BookPostDto book);
        Task<bool> UpdateBook(int id, BookPostDto bookDto);
        Task<bool> SoftDeleteBook(int id);
    }
}
