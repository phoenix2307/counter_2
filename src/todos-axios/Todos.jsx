import {useState} from "react";
import axios from "axios";

const api = {
    getTodo() {

        return axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.data)
    }
}

export const Todos = () => {

    const [error, setError] = useState(null)
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)


    // // with then
    // const onClickLoad = () => {
    //     setLoading(true)
    //     api.getTodo()
    //         .then((data) => {
    //             setTodos([todos, ...data])
    //         })
    //         .catch(error => {
    //             setError(`${error}`)
    //         })
    //         .finally(() => setLoading(false))
    // }
    //
    // const onClickClear = () => {
    //     setTodos([])
    // }

    // with async/await
    const onClickLoad = async () => {
        setLoading(true)
        try {

            const data = await api.getTodo()
            setTodos([todos, ...data])
        } catch (err) {
            setError(`${err}`)
        } finally {
            setLoading(false)
        }
    }

    const onClickClear = () => {
        setTodos([])
    }

    return loading ? (<div>Loading...</div>) : (
        <div>
            <button onClick={onClickLoad}>load todolist</button>
            {error && <div>{error}</div>}
            <ul>
                {todos.map(t =>
                    <li key={t.id}><span>{t.id}</span> {t.title}</li>
                )}
            </ul>
            <button onClick={onClickClear}>clear todolist</button>
        </div>
    )
}