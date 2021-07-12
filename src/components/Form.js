import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = (props) => {
    const [form, setForm] = useState("")

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.setToDos(
            [
                ...props.toDos,
                {
                    name: form,
                    isComplete: false,
                }
            ])
        event.target.reset();
    }

    return (
        <div>
            <form className="toDoForm" onSubmit={onSubmitHandler}>
                <input className="form-control" type="text" placeholder="Add To Do Item" onChange={(event)=>setForm(event.target.value)}/>
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form;