import React, { useState, useEffect } from "react";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:9393/tasks");
            const data = await response.json();
            setTasks(data);
        };
        fetchData();
    }, []);
    
    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:9393/tasks/${id}`, {
            method: "DELETE",
        });
        if (response.ok) {
            setTasks(tasks.filter((task) => task.id !== id));
            console.log("successfully deleted");
        } else {
            console.log("Failed to delete");
        }
    };

    const handleEdit = async (id, updates) => {
        const response = await fetch(`http://localhost:9393/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updates),
        });
        if (response.ok) {
            setTasks(
                tasks.map((task) =>
                    task.id === id ? { ...task, ...updates } : task
                )
            );
            console.log("Task successfully updated");
        } else {
            console.log("Task failed to update");
        }
    };

    return (
        <>
            <h1>Task List</h1>
            <div style={{
                backgroundColor: "#f1f1f1",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between"
            }}>
                {tasks.map((task) => (
                    <div key={task.id} style={{
                        backgroundColor: "#blue",
                        borderRadius: "15px",
                        padding: "20px",
                        boxShadow: "0 8px 14px 1 rgba(0, 0, 0, 0.2)",
                        width: "calc(30% - 20px)",
                        marginBottom: "20px"
                    }}>
                        <h2>{task.name}</h2>

                        <p>{task.description}</p>

                        <p>{task.date_of_completion}</p>


                        <p>{task.follow_up}</p>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                            <button onClick={() => {

                                const newDescription = prompt("Enter a new description:");

                                const newDateOfCompletion = prompt("Enter a new due date (DD-MM-YYYY):");

                                handleEdit(task.id, { description: newDescription, date_of_completion: newDateOfCompletion });

                            }}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default TaskList;

