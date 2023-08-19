using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models.Entities
{
    public class BaseEntity<TId>
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public TId Id { get; set; }
        public bool IsDeleted { get; set; }
    }
}
