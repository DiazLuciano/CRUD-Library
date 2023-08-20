using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class Book : BaseEntity<int>
    {
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(maximumLength: 50, MinimumLength = 3)]
        public string Title { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(maximumLength: 50, MinimumLength = 3)]
        public string Description { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public DateTime CreatedDate { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public int Stock { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        public int AuthorId { get; set; }
    }
}
