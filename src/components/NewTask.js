import React from 'react'

function NewTask() {
  return (
    <div>
        <form>
            <label>Name</label>
            <input type="text" placeholder='Name' /><br />
            <label>Description</label>
            <input type="text" placeholder='Description' /><br />
            <label>Follow Up</label>
            <input type="text" placeholder='Follow Up' /><br />
            <label>Date</label>
            <input type="text" placeholder='Date' /><br />
            <label>Date Of Completion</label>
            <input type="text" placeholder='Date Of Completion' /><br />
        </form>
    </div>
  )
}

export default NewTask


     // t.string :name
     // t.text :description
     // t.date :date_of_completion
     // t.boolean :follow_up
     // t.integer :id_of_user