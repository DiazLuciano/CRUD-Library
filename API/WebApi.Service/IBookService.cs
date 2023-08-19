using WebApi.Models.Dto;

namespace WebApi.Service
{
    public interface IBookService
    {
        Task<BookDto> GetBookById(int id);
        Task<bool> UpdateBook(int id, string newTitle);
    }
}
