import { useState } from 'react'
import app from './app.module.css'

function App() {

    const user_db = "luapp"
    const password_db = "lx123"
    const [auth, setAuth] = useState(false)




    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUser = (e) => {
        setUser(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const login = () => {
        if(user === user_db && password === password_db) {
            window.alert('Login Success')
            setAuth(true)
        } else {
            window.alert('Login Failed')
            setAuth(false)
        }
    }

    if (auth) {
        return (
            <div className={app.app}>
                <h1>Welcome {user}</h1>
                <button onClick={() => setAuth(false)}>Logout</button>
            </div>
        )
    } else {
        return (
            <div className={app.app}>
              <h1>React Workshop Offline Auth</h1>
              <br />
              <input type="text" placeholder="Username" value={user} onChange={handleUser}/>
              <br />
              <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
              <br />
              <button onClick={login}>Login</button>
            </div>
        )
    }

    
}

export default App
