let nextTodoId = 0;

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    All: 'SHOW_ALL',
    Active: 'SHOW_ACTIVE',
    Completed: 'SHOW_COMPLETED'
}