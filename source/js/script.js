document.addEventListener("DOMContentLoaded", function () {
  const customInput = document.getElementById("customInput");
  const toDoCollaboratorsSelect = document.getElementById("toDoCollaborators");
  const toDoCollaborators = document.querySelectorAll(".toDoCollaborator");
  const createForm = document.getElementById("createForm");
  const toDoItemCustomInput = document.querySelector(
    "#toDoItems .toDoItem .updateForm .formItem #customInput"
  );
  const toDoItemsCollaboratorsSelect = document.querySelector(
    "#toDoItems .toDoItem .updateForm .formItem #toDoItemsCollaborators"
  );
  const toDoItemsCollaborators = document.querySelectorAll(
    "#toDoItems .toDoItem .updateForm .formItem #toDoItemsCollaborators .toDoItemsCollaborator"
  );

  toDoItemCustomInput.addEventListener("click", function () {
    if (
      toDoItemsCollaboratorsSelect.classList.contains("toDoCollaboratorsActive")
    ) {
      toDoItemsCollaboratorsSelect.classList.remove("toDoCollaboratorsActive");
      toDoItemsCollaboratorsSelect.classList.add("toDoCollaboratorsDeActive");
      return;
    }
    toDoItemsCollaboratorsSelect.classList.remove("toDoCollaboratorsDeActive");
    toDoItemsCollaboratorsSelect.classList.add("toDoCollaboratorsActive");
  });

  customInput.addEventListener("click", function () {
    if (toDoCollaboratorsSelect.classList.contains("toDoCollaboratorsActive")) {
      toDoCollaboratorsSelect.classList.remove("toDoCollaboratorsActive");
      toDoCollaboratorsSelect.classList.add("toDoCollaboratorsDeActive");
      return;
    }
    toDoCollaboratorsSelect.classList.remove("toDoCollaboratorsDeActive");
    toDoCollaboratorsSelect.classList.add("toDoCollaboratorsActive");
  });

  checkMultipleCollaborators(toDoCollaborators);
  checkMultipleCollaborators(toDoItemsCollaborators);

  function checkMultipleCollaborators(nodeList) {
    nodeList.forEach((node) => {
      node.addEventListener("click", function () {
        const checkbox = node.firstElementChild;

        if (checkbox.hasAttribute("checked")) {
          checkbox.removeAttribute("checked");
        } else {
          checkbox.setAttribute("checked", "checked");
        }
      });
    });
  }

  createForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formItems = Object.fromEntries(formData);
    const toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    const data = {
      name: "",
      description: "",
      note: "",
      author: "",
      end: null,
      priority: "",
      start: null,
      assignee: "",
      collaborators: [],
      create: GetCurrentDate(),
      update: GetCurrentDate(),
      status: "backlog",
    };
    if (toDoItems) {
      toDoCollaborators.forEach((toDoCollaborator) => {
        if (
          toDoCollaborator.firstElementChild.getAttribute("checked") ===
          "checked"
        ) {
          data.collaborators.push(
            toDoCollaborator.lastElementChild.textContent
          );
        }
      });
      data.name = formItems.toDoName;
      data.description = formItems.toDoDescription;
      data.note = formItems.toDoNote;
      data.author = formItems.toDoAuthor;
      data.end = formItems.toDoDeadline;
      data.priority = formItems.toDoPriority;
      data.start = formItems.toDoStartDate;
      data.assignee = formItems.assignedUser;

      toDoItems.push(data);
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
    } else {
      const toDoItems = [];
      toDoCollaborators.forEach((toDoCollaborator) => {
        if (
          toDoCollaborator.firstElementChild.getAttribute("checked") ===
          "checked"
        ) {
          data.collaborators.push(
            toDoCollaborator.lastElementChild.textContent
          );
        }
      });
      data.name = formItems.toDoName;
      data.description = formItems.toDoDescription;
      data.note = formItems.toDoNote;
      data.author = formItems.toDoAuthor;
      data.end = formItems.toDoDeadline;
      data.priority = formItems.toDoPriority;
      data.start = formItems.toDoStartDate;
      data.assignee = formItems.assignedUser;
      toDoItems.push(data);
      localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
    }
  });
});

function GetCurrentDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function GenerateUniqueIdentifier() {
  do {} while (condition);
}

function IsUniqueIdentifier() {}
