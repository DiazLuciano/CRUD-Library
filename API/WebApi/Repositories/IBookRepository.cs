using WebApi.Models.Entities;

namespace WebApi.Repositories
{
    public interface IBookRepository
    {
        Task<IEnumerable<Book>> GetAll();
        Task<Book>? GetById(int id);
        Task<Book> Insert(Book book);
        Task<bool> Update(Book book);
        Task<bool> SoftDelete(int id);
    }
}
