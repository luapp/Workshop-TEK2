import React, { useState } from 'react'
import app from './app.module.css'

function App() {
    const user_db = 'luapp'
    const password_db = 'lx123'
    const [auth, setAuth] = useState(false)


    
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [todoList, setTodoList] = useState([])





    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = () => {
        if (user === user_db && password === password_db) {
            window.alert('Login Success')
            setAuth(true)
        } else {
            window.alert('Login Failed')
            setAuth(false)
        }
    }

    const handleAddTodo = () => {
        const newTodo = prompt('Enter a new todo item:')
        if (newTodo) {
            setTodoList([...todoList, newTodo])
        }
    }

    const handleRemoveTodo = (index) => {
        const updatedList = [...todoList]
        updatedList.splice(index, 1)
        setTodoList(updatedList)
    }




    if (auth) {
        return (
            <div className={app.app}>
                <h1>Welcome {user}</h1>
                <button onClick={() => setAuth(false)}>Logout</button>
                <h2>Todo List:</h2>
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        )
    } else {
        return (
            <div className={app.app}>
                <h1>React Workshop Offline Auth</h1>
                <br />
                <input type="text" placeholder="Username" value={user} onChange={handleUser} />
                <br />
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
                <br />
                <button onClick={login}>Login</button>
            </div>
        )
    }
}

export default App
