import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [description, setDescription] = useState(props.edit ? props.edit.value : '')
    // const [deadline, setDeadline] = useState('')
    // const [user, setUser] = useState('')

    const inputRef = useRef(null);

    useEffect(() => {
       inputRef.current.focus()
    })

    const handleDescChange = e => {
        setDescription(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            description: description
        });

        setDescription('')

    }

    return (
       <form className="todo-form" onSubmit={handleSubmit}>
           {props.edit ? (
                <>
                    <input type="text" placeholder="Descrição" value={description} name="input" className="todo-input edit" onChange={handleDescChange} ref={inputRef}></input>
                    <button className="todo-button edit">Edit</button>
                </>
           ) : (
                <>
                    <input type="text" placeholder="Descrição" value={description} name="input" className="todo-input" onChange={handleDescChange} ref={inputRef}></input>
                    <button className="todo-button ">Add</button>
                </>
           )}
       </form> 
    )
}

export default TodoForm
