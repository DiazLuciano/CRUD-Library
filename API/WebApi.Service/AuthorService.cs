using AutoMapper;
using WebApi.Models.Dto;
using WebApi.Models.Entities;
using WebApi.Repositories.Repositories;

namespace WebApi.Service
{
    public class AuthorService : IAuthorService
    {
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;

        public AuthorService(IAuthorRepository authorRepository, IMapper mapper)
        {
            _authorRepository = authorRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AuthorDto>> GetAllAuthors()
        {
            var authors = await _authorRepository.GetAll();
            var authorsDto = _mapper.Map<IEnumerable<AuthorDto>>(authors); // Utiliza Map para mapear una lista
            return authorsDto;
        }

        public async Task<AuthorDto> GetAuthorById(int id)
        {
            var author = await _authorRepository.GetById(id);
            return _mapper.Map<AuthorDto>(author);
        }

        public async Task<AuthorDto> Insert(AuthorPostDto authorPostDto)
        {
            var author = _mapper.Map<Author>(authorPostDto);
            var insertedAuthor = await _authorRepository.Insert(author);
            return _mapper.Map<AuthorDto>(insertedAuthor);
        }

        public async Task<bool> UpdateAuthor(int id, AuthorPostDto authorPostDto)
        {
            var existingAuthor = await _authorRepository.GetById(id);
            if (existingAuthor == null)
            {
                return false;
            }

            _mapper.Map(authorPostDto, existingAuthor); // Actualizar propiedades
            await _authorRepository.Update(existingAuthor);
            return true;
        }

        public async Task<bool> SoftDeleteAuthor(int id)
        {
            return await _authorRepository.SoftDelete(id);
        }
    }
}