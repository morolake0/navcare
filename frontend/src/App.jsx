import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/hello")
    .then((response)=> response.json())
    .then((data) => {
      setMessage(data.message);
    })

  }, []);

  return (

    <p>{message}</p>
    
  )
}

export default App
