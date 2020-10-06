import { connect } from 'react-redux';
import { VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.All:
            return todos;
        case VisibilityFilters.Active:
            return todos.filter(task => !task.completed);
        case VisibilityFilters.Completed:
            return todos.filter(task => task.completed); 
        default:
            throw new Error('Unknown Filter: ' + filter);           
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


export default connect(
    mapStateToProps
)(TodoList);