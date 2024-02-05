import { useState } from 'react'
import app from './app.module.css'

function App() {
	const [counter, setCounter] = useState(0);
	
    return (
      	<div className={app.app}>
			<h1>React Workshop</h1>
			<br />
			<h2>Counter: {counter}</h2>
			<br />
			<button onClick={() => setCounter(counter + 1)}>+ Add to counter</button>
			<button onClick={() => setCounter(counter - 1)}>- Subtract from counter</button>
      	</div>
    )
}

export default App
