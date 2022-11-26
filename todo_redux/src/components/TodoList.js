import React,{useState,useEffect} from "react"
import { useSelector,useDispatch } from "react-redux"
import { setTodos,addTodo } from "../features/TodoSlice"
import axios from "axios"
import Todos from "./Todos"
import { Typography,Input,Button,Grid } from "@mui/material"

const TodoList = () => {

    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    const [inputTodo,setInputTodo] = useState("")

    const handleInput = (e) => {

        setInputTodo(e.target.value)
    }

    const handleAddTodo = async () => {

        if (!inputTodo) {
            return
        }
        const todo = {
            body : inputTodo,
            done : false
        }
        const newTodo = await axios.post("http://localhost:8000/api/maketodo",todo)
        dispatch(addTodo(newTodo.data))
        setInputTodo("")
    }

    const fetchTodos = async () => {

        const initTodos = await axios.get("http://localhost:8000/api/todos")
        dispatch(setTodos(initTodos.data))
    }

    useEffect(() => {

        fetchTodos()
    },[])

    return (
        <Grid container alignItems = "center" justify = "center" direction = "column">
            <Typography variant = "h4" gutterBottom>
                TODO LIST
            </Typography>
            <Input onChange = {handleInput} value = {inputTodo} type = "text"/>
            <Button onClick = {handleAddTodo}>ADD</Button>
            <Grid container spacing = {12}>
                {todos.map((todo) => {
                    return <Todos key = {todo.id} todo = {todo} />
                })}
            </Grid>
        </Grid>
    )
}

export default TodoList