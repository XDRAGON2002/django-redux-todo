import { createSlice } from "@reduxjs/toolkit"

export const TodoSlice = createSlice({

    name : "todo",
    initialState : {
        todos : []
    },
    reducers : {
        setTodos : (state,action) => {
            state.todos = action.payload
        },
        addTodo : (state,action) => {
            state.todos.push(action.payload)
        },
        deleteTodo : (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        editTodo : (state,action) => {
            const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[idx].body = action.payload.body
        },
        markTodo : (state,action) => {
            const idx = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos[idx].done = !state.todos[idx].done
        }
    }
})

export const {setTodos,addTodo,deleteTodo,editTodo,markTodo} = TodoSlice.actions
export default TodoSlice.reducer