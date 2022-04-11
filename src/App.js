import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    getData()
  }, [])

  function getData() {
    axios.get("http://localhost:2222/books").then(({ data }) => {
      setBooks(data)
    })
  }

  return (
    <div className="App">
      <input type="text" />
      <button>Search</button>
      <div>
        {books.map((item) => {
          return (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>{item.author}</div>
              <div>{item.publish_year}</div>
              <br />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
