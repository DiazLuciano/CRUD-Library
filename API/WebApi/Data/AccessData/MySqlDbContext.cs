using Microsoft.EntityFrameworkCore;
using WebApi.Models.Entities;

namespace WebApi.Data.AccessData
{
    public class MySqlDbContext : DbContext
    {
        public MySqlDbContext(DbContextOptions<MySqlDbContext> options)
               : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }
    }
}
