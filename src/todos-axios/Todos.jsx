import {useState} from "react";
import axios from "axios";

const api = {
    getTodo() {
        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)
    }
}

export const Todos = () => {

    const [todos, setTodos] = useState([])
    const onClickLoad = () => {
        api.getTodo().then((data) => {
            console.log(todos)
            setTodos([todos, ...data])
        })

    }
    const onClickClear = () => {
        setTodos([])
    }


    return (
        <div>
            <button onClick={onClickLoad}>load todolist</button>
            <ul>
                {todos.map(t =>
                    <li key={t.id}><span>{t.id}</span> {t.title}</li>
                )}
            </ul>
            <button onClick={onClickClear}>clear todolist</button>
        </div>
    )
}