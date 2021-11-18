using Microsoft.AspNetCore.Mvc;
using Todo.Context;
using Todo.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.MapGet("/todo", () =>
{
    return TodoContext.Instance.GetAllTodoItem();
});

app.MapGet("/todo/{id}", (int id) =>
{
    return TodoContext.Instance.GetTodoItem(id);
});

app.MapPost("/todo", ([FromBody] TodoItem todoItem) =>
{
    return TodoContext.Instance.AddTodoItem(todoItem);
});

app.MapPut("/todo/{id}", (int id, [FromBody] TodoItem todoItem) =>
{
    return TodoContext.Instance.UpdateTodoItem(id, todoItem);
});

app.MapDelete("/todo/{id}", (int id) =>
{
    TodoContext.Instance.RemoveTodoItem(id);
});

app.Run();