import { useEffect, useState } from 'react';
import { fetchTodos } from '../../data/todos';
import './Todo.css'


function Todo() {
    const [todosRaw, setTodosRaw] = useState([])

    const [onlyWaiting, setOnlyWaiting] = useState(false)
    const [itemsPerpage, setItemsPerpage] = useState(5)

    const [todos, setTodos] = useState([])

    const [numPages, setNumPages] = useState(0)

    const [curPage, setCurPage] = useState(1)

    useEffect(() => {
        setCurPage((prev) => (prev > numPages ? numPages : prev))
    }, [numPages])

    useEffect(() => {
        console.log(`curPage: ${curPage}`)
    }, [curPage])

    useEffect(() => {
        console.log(`onlyWaiting: ${onlyWaiting}`);
    }, [onlyWaiting]);


    useEffect(() => {
        console.log(`itemsPerpage: ${itemsPerpage}`)
        setNumPages(Math.ceil(todosRaw.length / itemsPerpage))
    }, [itemsPerpage, todosRaw])

    useEffect(() => {
        setTodosRaw(fetchTodos())
        setCurPage(1)
    }, []) //run first load

    useEffect(() => {
        if (onlyWaiting) {
            // waiting
            setTodos(todosRaw.filter((todo) => todo.completed === false))
        } else {
            // all
            setTodos(todosRaw)
        }
    }, [todosRaw, onlyWaiting, itemsPerpage])

    return (
        <div className='todo-container'>

            <div className='todo-filters-container'>
                {/* filter */}
                <div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                            onClick={(e) => { setOnlyWaiting(e.target.checked) }}
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                            Show only&nbsp;
                            <button className='btn btn-warning'>Waiting&nbsp;
                                <span className='bi bi-clock'></span>
                            </button>
                        </label>
                    </div>
                </div>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue={5}
                    style={{ width: '200px' }}
                    onChange={(e) => { setItemsPerpage(e.target.value) }}
                >

                    <option value={5}>5 items per page</option>
                    <option value={10}>10 items per page</option>
                    <option value={50}>50 items per page</option>
                    <option value={100}>100 items per page</option>
                </select>
            </div>
            {/* {/* table} */}
            <table className='table table-striped'>
                <thead className='table-dark'>
                    <tr>
                        <th style={{ width: '10%' }}>ID</th>
                        <th>Title</th>
                        <th style={{ textAlign: 'right' }}>Completed</th>
                    </tr>
                </thead>
                <tbody>


                    {

                        todos.filter((todo, index) => {
                            const min = (curPage - 1) * itemsPerpage
                            const max = curPage * itemsPerpage - 1
                            return index >= min && index <= max
                        })
                        .map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td>
                                        <span className='badge bg-secondary'
                                            style={{ width: '3rem' }}>
                                            {todo.id}</span>
                                    </td>
                                    <td style={{ textAlign: 'left' }}>{todo.title}</td>
                                    <td style={{ textAlign: 'right' }}>
                                        <span className={'badge ' + (todo.completed ? 'bg-success' :
                                            'bg-warning')}>
                                            {todo.completed ? "done" : 'waiting'}
                                            &nbsp;
                                            <span className={'bi ' + (todo.completed ? 'bi-check' :
                                                'bi-clock'
                                            )}></span>
                                        </span>
                                        <button className='btn btn-danger'><span className='bi bi-trash'></span></button></td>
                                </tr>

                            )
                        }

                        )}

                </tbody>
            </table>
            {/* // {page control */}
            <div>
                <button className='btn btn-outline-primary todo-space'
                    onClick={() => { setCurPage(1) }}
                    disabled={curPage === 1}
                >
                    First</button>
                <button className='btn btn-outline-primary todo-space'
                    onClick={() => curPage > 1 ? setCurPage(curPage - 1) : null}
                    disabled={curPage === 1}
                >
                    Previous</button>
                <span className='todo-space'>{curPage}&nbsp;/&nbsp;{numPages}</span>

                <button className='btn btn-outline-primary todo-space'
                    onClick={() => { curPage < numPages && setCurPage(curPage + 1) }}
                    disabled={curPage === numPages}
                >
                    Next</button>
                <button className='btn btn-outline-primary todo-space'
                    onClick={() => { setCurPage(numPages) }}
                    disabled={curPage === numPages}
                >
                    Last</button>
            </div>
        </div>);
}

export default Todo;