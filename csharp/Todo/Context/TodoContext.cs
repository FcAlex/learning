using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Todo.Models;

namespace Todo.Context;

public class TodoContext
{
    private List<TodoItem> _todoList = new List<TodoItem>();
    public static TodoContext Instance { get; } = new TodoContext();

    private TodoContext()
    {
        _todoList.Add(new TodoItem { Id = 1, Title = "Task 1", Completed = false });
        _todoList.Add(new TodoItem { Id = 2, Title = "Task 2", Completed = false });
        _todoList.Add(new TodoItem { Id = 3, Title = "Task 3", Completed = false });
    }

    public List<TodoItem> GetAllTodoItem()
    {
        return _todoList;
    }

    public TodoItem? GetTodoItem(int id) => _todoList.FirstOrDefault(t => t.Id == id);

    public TodoItem AddTodoItem(TodoItem todoItem)
    {
        todoItem.Id = _todoList.Max(todo => todo.Id) + 1;
        _todoList.Add(todoItem);

        return todoItem;
    }

    public TodoItem? UpdateTodoItem(int id, TodoItem todoItem)
    {
        var newTodo = _todoList.Find(todo => todo.Id == id);

        if (newTodo is not null)
        {
            newTodo.Title = todoItem.Title;
            newTodo.Completed = todoItem.Completed;
        }

        return newTodo;
    }

    public void RemoveTodoItem(int id) => _todoList.RemoveAll(t => t.Id == id);
}
