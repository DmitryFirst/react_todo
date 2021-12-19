
import React from "react";             // 5 (2 правила) 1импортируем react и 2 export чего то наружу export TodoList
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

 function TodoList(props){
    return (
        <ul style={styles.ul}>
           {props.todos.map((todo, index) => {
               return <TodoItem 
               todo={todo} 
               key={todo.id} 
               index={index} 
               onChange={props.onToggle } /> 
           })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList