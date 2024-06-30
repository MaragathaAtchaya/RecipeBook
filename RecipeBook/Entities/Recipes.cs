namespace RecipeBook.Entities
{
    public class Recipes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Method { get; set; }
        public string Ingredients {  get; set; }
        public string AuthorName {  get; set; }
        public DateTime Date {  get; set; }
    }
}
