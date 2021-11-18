
namespace Todo.Models;

public class TodoItem
{
    public int Id { get; set; }
    public string Title { get; set; } = default!;
    public bool Completed { get; set; }
}