import React from 'react';

const ToDoCard = (props) => {

    return (
        <div className={props.toDo.isComplete ? "toDoCard complete" : "toDoCard"}>
        <h3 className="toDoItem" >{props.toDo.name}</h3>
        <div className="toDoCardCheckboxRow" >
            <div>
            <input type="checkbox" className="form-check-input" checked={props.toDo.isComplete} onChange={()=>props.onCheckHandler(props.idx)}/>
            <label>Complete?</label>
            </div>
            <div className="dontStrike">

                <button type="button" onClick={()=>props.onDeleteHandler(props.idx)} className="btn btn-dark" >Delete</button>

            </div>
        </div>
        </div>
    )
}

export default ToDoCard;