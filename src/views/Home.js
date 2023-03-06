import React, {useState, useEffect} from 'react'

function Home({user}) {

  const [, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState([])

  const user_id = localStorage.getItem('user_id')


useEffect(() =>{
  fetch(`http://localhost:9393/$`)
  .then(response => response.json())
  .then((tasks) => {
    console.log(tasks)
    setTasks(tasks)
    setAllTasks(
    tasks.map((task) => (
      <div>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
      </div>
    )))
  })
}, [])
  return (
    <div>
      {allTasks}
    </div>
  )
}

export default Home