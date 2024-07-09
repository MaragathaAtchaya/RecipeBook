using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeBook.Data;
using RecipeBook.Entities;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace RecipeBook.Controllers
{
    [ApiController]
    [Route("recipebook/[controller]")] //https://localhost:5001/recipebook
    public class Recipe:ControllerBase
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
        public async Task AddItem(Recipes item)
        {
            _context.Recipes.Add(item);
            await _context.SaveChangesAsync();
        }

        //[HttpPut]
        //public async Task<ActionResult<Recipes>> EditItem(Recipe item)
        //{
        //    if (item == null)
        //    {
        //        throw new ArgumentNullException(nameof(item));
        //    }

        //}

        [HttpDelete("id")]
        public async Task DeleteItem(int id)
        {
            var recipeItem = _context.Recipes.FirstOrDefault(x => x.Id == id);
            if (recipeItem != null) { 
            _context.Recipes.Remove(recipeItem);
            }

            await _context.SaveChangesAsync();

        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            if (image == null || image.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            var filePath = Path.Combine("wwwroot/images", image.FileName);
            string ext = Path.GetExtension(image.FileName).ToLower().TrimStart('.');

            if (!(ext == "jpg" || ext == "png" || ext == "jpeg"))
            {
                return BadRequest("Invalid Image (accepts only jpg/png)");
            }

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }


            return Ok(new { FilePath = filePath });
        }

        [HttpGet("image")]
        public ActionResult GetImage(string fileName)
         {
            var filePath = Path.Combine("wwwroot/images", fileName);

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound();
            }

            var image = System.IO.File.OpenRead(filePath);
            string ext = Path.GetExtension(fileName).ToLower().TrimStart('.');

            return File(image, "image/"+ext);
        }
    }
}
