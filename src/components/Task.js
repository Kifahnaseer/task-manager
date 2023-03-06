import React, {useEffect, useState} from 'react'

function Task() {

  const [, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState([])

useEffect(() =>{
  fetch("https://localhost:9393")
  .then(response => response.json())
  .then((tasks) => {
    console.log(tasks)
    setTasks(tasks)
    setAllTasks(
    tasks.map((task) => (
      <div>

        <h2>{task.title}</h2>

        <p>{task.body}</p>

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

export default Task
