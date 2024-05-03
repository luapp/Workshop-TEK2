import React, { useState } from 'react';
import {initializeApp} from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './app.module.css';

const firebaseConfig = {
    apiKey: "AIzaSyDA9IEoVjR7Se1sD8cg9HZer7oa2J3hbys",
    authDomain: "testsrv-wt.firebaseapp.com",
    projectId: "testsrv-wt",
    storageBucket: "testsrv-wt.appspot.com",
    messagingSenderId: "617221161312",
    appId: "1:617221161312:web:51f646278a5675cf3b9e05"
};
const fire_app = initializeApp(firebaseConfig);

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [live_user, set_live_user] = useState('');

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.alert('Login successful');
        setAuth(true);
        set_live_user(user.email);
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage);
    });
  };

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

    const signout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setAuth(false);
            set_live_user('');
        }).catch((error) => {
            window.alert('An error occurred');
        });
    }


    if (auth) {
        return (
            <div className={app.app}>
                <h1>Welcome {user}</h1>
                <button onClick={signout}>Logout</button>
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
                <div className={app.divbox}>
                    <h1 className={`${app.h1t} ${app.n1}`}>H</h1>
                    <h1 className={`${app.h1t} ${app.n2}`}>E</h1>
                    <h1 className={`${app.h1t} ${app.n3}`}>L</h1>
                    <h1 className={`${app.h1t} ${app.n4}`}>L</h1>
                    <h1 className={`${app.h1t} ${app.n5}`}>O</h1>
                </div>
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
