using WebApi.Models.Dto;
using WebApi.Models.Entities;
using AutoMapper;

namespace WebApi.Models.Profiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, BookDto>();
            CreateMap<BookDto, Book>();
            CreateMap<BookPostDto, Book>();
        }
    }
}
