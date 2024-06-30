using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeBook.Data;
using RecipeBook.Entities;

namespace RecipeBook.Controllers
{
    [ApiController]
    [Route("recipebook/[controller]")] //https://localhost:5001/recipebook
    public class Recipe
    {
        private readonly RecipeContext _context;
        

        public Recipe(RecipeContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Recipes>>> GetItems()
        {

            var recipelist = await _context.Recipes.ToListAsync() ;
            return recipelist;
        }

        [HttpGet("id")]
        public async Task<ActionResult<Recipes>> GetitemById(int id) 
        {
            return await _context.Recipes.FirstAsync(x => x.Id == id);
        }

        [HttpPost]
        public async Task Additem(Recipes item)
        {
            _context.Recipes.Add(item);
            await _context.SaveChangesAsync();
        }

    }
}
