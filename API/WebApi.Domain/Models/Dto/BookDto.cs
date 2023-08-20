using WebApi.Models.Entities;

namespace WebApi.Models.Dto
{
    public class BookDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedDate { get; set; }
        public int Stock { get; set; }
        public int AuthorId { get; set; }
    }
}
