using WebApi.Models.Entities;

namespace WebApi.Models.Dto
{
    public class AuthorPostDto
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public List<Book> Books { get; set; }
    }
}
