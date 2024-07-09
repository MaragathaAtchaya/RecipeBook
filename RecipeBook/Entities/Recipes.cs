using System.ComponentModel.DataAnnotations;

namespace RecipeBook.Entities
{
    public class Recipes
    {
        public int Id { get; set; }
        [Required(ErrorMessage ="Enter Dish Name")]
       
        public string Name { get; set; }
        [Required(ErrorMessage = "Enter preparation method")]
        
        public string Method { get; set; }
        [Required(ErrorMessage = "Enter Ingredients")]
        
        public string Ingredients {  get; set; }
        [Required(ErrorMessage = "Enter your name")]
        
        public string AuthorName {  get; set; }
        [Required(ErrorMessage ="Upload recipe sample image")]
        public string ImageName { get; set; }
        public DateTime Date {  get; set; }
    }
}
