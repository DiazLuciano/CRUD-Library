using AutoMapper;
using WebApi.Models.Dto;
using WebApi.Models.Entities;

namespace WebApi.Models.Profiles
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<Author, AuthorDto>();
            CreateMap<AuthorDto, Author>();
            CreateMap<AuthorPostDto, Author>();
        }
    }
}
