document.addEventListener("DOMContentLoaded", function()
{
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event)
    {
       event.preventDefault();
       const formData = new FormData(form);
       const obj = Object.fromEntries(formData);
       if(localStorage.getItem("toDoItems"))
       {
          const toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
          toDoItems.push(obj);
          localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
       }
       else
       {
          const toDoItems = [];
          toDoItems.push(obj);
          localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
       }


    });
});