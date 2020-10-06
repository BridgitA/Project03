let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});
export const VisibilityFilters = {
    All: 'All',
    Active: 'Active',
    Completed: 'Completed'
}