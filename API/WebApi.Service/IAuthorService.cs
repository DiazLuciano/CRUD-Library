using WebApi.Models.Dto;

namespace WebApi.Service
{
    public interface IAuthorService
    {
        Task<IEnumerable<AuthorDto>> GetAllAuthors();
        Task<AuthorDto> GetAuthorById(int id);
        Task<AuthorDto> Insert(AuthorPostDto author);
        Task<bool> UpdateAuthor(int id, AuthorPostDto authorPostDto);
        Task<bool> SoftDeleteAuthor(int id);
    }
}
