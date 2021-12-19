import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
//import AddTodo from "./Todo/addTodo";
import Loader from "./Loader";
import Modal from "./Modal/Modal";

const AddTodo = React.lazy(() => new Promise( resolve => {
setTimeout(() => {
  resolve( import('./Todo/AddTodo'))
}, 3000)
}))
                                            //1)очистка App(), очистка import logo и App.css, удалениефайлов тестов и лого
function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  //let todos = 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
     .then(response => response.json())
     .then(todos => {
       setTimeout(()=>{
        setTodos(todos)
        setLoading(false)
       }, 2000)
       
      })
  }, [])

function toggleTodo(id){
  setTodos  (todos.map(todo =>{
              if(todo.id === id){
                todo.completed = !todo.completed
              }
            return todo
  })
  )
}
                                    //2) в return добавляем div  и заголовок
                                    //3) в проекте создаем папку todo
                                    //4) папке тодо создаем новый компонент(файл) TodoList

  function removeTodo(id){
    setTodos(todos.filter(todo=> todo.id !== id))
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title ,
      id: Date.now(),
      competed: false
    }]))
  }

return   (
  <Context.Provider value={{removeTodo}}>
    <div className="wrapper">
      <h1>React tutorial</h1>
      <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
        <AddTodo onCreate={addTodo} />
        </React.Suspense>
        

          {loading && <Loader />}
            {todos.length ? (
            <TodoList todos = {todos} onToggle= {toggleTodo} />
              ) : loading ? null : (
              <p>No todos!</p>
            )}
        
    </div> 
  </Context.Provider>
  )

   
  
}

export default App;
