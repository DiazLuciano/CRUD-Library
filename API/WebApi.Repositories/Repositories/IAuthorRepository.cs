using WebApi.Models.Entities;

namespace WebApi.Repositories.Repositories
{
    public interface IAuthorRepository
    {
        Task<IEnumerable<Author>> GetAll();
        Task<Author>? GetById(int id);
        Task<Author> Insert(Author book);
        Task Update(Author book);
        Task<bool> SoftDelete(int id);
    }
}
