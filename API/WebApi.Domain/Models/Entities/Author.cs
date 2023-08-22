using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class Author : BaseEntity<int>
    {
        [Required(ErrorMessage = "{0} is required")]
        [StringLength(maximumLength: 50, MinimumLength = 3)]
        public string Name { get; set; }

        [Required(ErrorMessage = "{0} is required")]
        [StringLength(maximumLength: 50, MinimumLength = 3)]
        public string Lastname { get; set; }
        public virtual ICollection<Book> Books { get; set; }
    }
}
