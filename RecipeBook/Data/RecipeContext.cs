using Microsoft.EntityFrameworkCore;
using RecipeBook.Entities;

namespace RecipeBook.Data
{
    public class RecipeContext : DbContext
    {
        public RecipeContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Recipes> Recipes { get; set; }
    }
}
