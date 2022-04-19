function TodoList (id, title, completed) {
    this.id = id;
    this.title = title;
    this.completed = completed;
}

const todoListHeader = ['id', 'title', 'completed'];

// containerElement is the element we want to render the table into
// users is an array of objects representing user data
function renderUserTable(users, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(userHeaders, users);
    containerElement.replaceChildren(table);
}