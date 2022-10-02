import {useState, useEffect} from 'react'
import "./styles.css"

function Tasks() {


    const [tasks, setTasks] = useState([
        {
            id: 1,
            isComplete: false,
            taskInfo: "Learn JavaScript"
        },
        {
            id: 2,
            isComplete: false,
            taskInfo: "Learn React"
        },
        {
            id: 3,
            isComplete: false,
            taskInfo: "Happy Hacking!"
        },
        {
            id: 4,
            isComplete: false,
            taskInfo: "Happy Coding!"
        }
    ])

    // const newTaskInputInitValue = [{isComplete: false,taskInfo: ""}]
    const newTaskInputInitValue = ""
    const [newTaskInput, setnewTaskInput] = useState(newTaskInputInitValue)
    const [selectedI, setselectedI] = useState(1)
    const [filteredTasks, setFilteredTasks] = useState([])
    const [tempIndex, setTempIndex] = useState(1)


    useEffect(() => {
        // console.log("newtask input changed")
        // console.log(newTaskInput)
    },[newTaskInput])

    useEffect(() => {
        // console.log("task added")
        // console.log(tasks)
    },[tasks])

    useEffect(() => {
        // Filtre değişti
        switch (selectedI) {
            case 1:
                setFilteredTasks(tasks)
                // console.log("filtered tasks",filteredTasks)
                break;
        
            case 2:
                setFilteredTasks(tasks.filter((item) => {
                    if (!item.isComplete)
                    {
                        return item
                    }
                }))
                // console.log("filtered tasks",filteredTasks)
                break;

            case 3:
                setFilteredTasks(tasks.filter((item) => {
                    if (item.isComplete)
                    {
                        return item
                    }
                }))
                // console.log("filtered tasks",filteredTasks)
                break;
        }
    },[selectedI,tasks])

    const addNewTask = () => {
        //add in tasks useState
        if (newTaskInput != "")
        {
            setTasks([...tasks, {id:tasks.length+1, isComplete: false,taskInfo:newTaskInput}])
        }
        


        //clear new task line
        setnewTaskInput(newTaskInputInitValue)
    }
    
    const changeText = (e) => {
        if (e.target.name == "newTask")
        {
            setnewTaskInput(e.target.value)
        }
    }

    const doneTask = (e) => {
       
        tasks.filter((item) => {
            if (item.id == e.target.name)
            {
                    (e.target.checked == false) ?  item.isComplete = false : item.isComplete = true
                    // item.isComplete = true

                    setTasks([...tasks])

                
            }
        })
    }



    const destroy = (e) => {
        // const temp = [...list];

        // // removing the element using splice
        // temp.splice(idx, 1);
    
        // // updating the list
        // updateList(temp);

        const temp = [...tasks];
        // setTempIndex(temp.findIndex(item => {item.id == e.target.name}))
        temp.map((item,index) => {
            if (item.id == e.target.name)
            {
                setTempIndex(index)
            }
        })
        
        temp.splice(tempIndex,1)
        setTasks(temp)


    }


  return (
    <div>
        <section className="todoapp">
	<header className="header">
		<h1>To Do's</h1>
	
        <span>
		    <input value={newTaskInput} name='newTask' className="new-todo" placeholder="What needs to be done?" autoFocus onChange={changeText} />
            <button id='addButton' onClick={addNewTask}>Add New Task</button>
        </span>
  
	</header>
	
	<section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">


        {filteredTasks.map((item,id) => {
            return(
            <li key={id} className={item.isComplete ? "completed" : ""}>
                <div className="view">
                    <input name={item.id} className="toggle" type="checkbox" onClick={doneTask} />
                    <label>{item.taskInfo}</label>
                    <button name={item.id} onClick={destroy} className="destroy"></button>
                </div>
		    </li>
            )
        })}

{/* 
			<li className="completed">
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn JavaScript</label>
					<button className="destroy"></button>
				</div>
			</li>

			<li>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Learn React</label>
					<button className="destroy"></button>
				</div>
			</li>

			<li>
				<div className="view">
					<input className="toggle" type="checkbox" />
					<label>Have a life!</label>
					<button className="destroy"></button>
				</div>
			</li> */}
		</ul>
	</section>

	<footer className="footer">
		<span className="todo-count">
			<strong>{filteredTasks.length} </strong>
            items left
		</span>

		<ul className="filters">
			<li>
				<a  className={selectedI == 1 ? "selected" : ""} onClick={() => {setselectedI(1)}}>All</a>
			</li>
			<li>
				<a  className={selectedI == 2 ? "selected" : ""} onClick={() => {setselectedI(2)}}>Active</a>
			</li>
			<li>
				<a  className={selectedI == 3 ? "selected" : ""} onClick={() => {setselectedI(3)}}>Completed</a>
			</li>
		</ul>

		
	</footer>
</section>

<footer className="info">
	<p>Created by <a href="https://github.com/tugaytuna">Tugay Tuna</a></p>
</footer>

    </div>
  )
}

export default Tasks