import React,{useState} from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { deleteTodo,editTodo,markTodo } from "../features/TodoSlice"
import { Typography,Box,Input,Button,Checkbox,Modal,Grid,ButtonGroup } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({

    modal : {
        minHeight : "100vh",
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    data : {
        wordWrap : "break-word"
    },
    btngrp : {
        float : "right"
    }
})

const Todos = ({todo}) => {

    const dispatch = useDispatch()
    const [open,setOpen] = useState(false)
    const [editInputTodo,setEditInputTodo] = useState("")
    const classes = useStyles()

    const handleMarkTodo = async () => {

        await axios.post(`http://localhost:8000/api/updatetodo/${todo.id}`,{body : todo.body,done : !todo.done})
        dispatch(markTodo(todo))
    }

    const handleDeleteTodo = async () => {
        
        await axios.delete(`http://localhost:8000/api/deletetodo/${todo.id}`)
        dispatch(deleteTodo(todo))
    }

    const handleOpen = () => {

        setOpen(!open)
        setEditInputTodo(todo.body)
    }

    const handleEditInputTodo = (e) => {

        setEditInputTodo(e.target.value)
    }

    const handleEditTodo = async () => {

        const oldTodo = {
            body : editInputTodo,
            done : todo.done
        }
        const newTodo = await axios.post(`http://localhost:8000/api/updatetodo/${todo.id}`,oldTodo)
        dispatch(editTodo(newTodo.data))
        handleOpen()
    }

    return (
        <Grid item xs = {12} sm = {6} lg = {3} xl = {2}>
            <Checkbox onChange = {handleMarkTodo} checked = {todo.done} type = "checkbox" />
            <Typography variant = "h5" className = {classes.data} color = {todo.done ? "textSecondary" : "textPrimary"}>
                {todo.body}
            </Typography>
            <ButtonGroup variant = "contained" className = {classes.btngrp}>
                <Button color = "primary" onClick = {handleOpen}>EDIT</Button>
                <Button color = "secondary" onClick = {handleDeleteTodo}>DELETE</Button>
            </ButtonGroup>
            {open && <Modal open = {open} onClose = {handleOpen} className = {classes.modal} aria-labelledby = "modal-modal-title" aria-describedby = "modal-modal-description">
                <Box component = "div">
                    <Typography variant = "h4" gutterBottom>
                        EDIT TODO
                        <br />
                        <Input onChange = {handleEditInputTodo} value = {editInputTodo} type = "text" fullWidth/>
                    </Typography>
                    <ButtonGroup variant = "contained" className = {classes.btngrp}>
                        <Button color = "primary" onClick = {handleEditTodo}>SAVE</Button>
                        <Button color = "secondary" onClick = {handleOpen}>CANCEL</Button>
                    </ButtonGroup>
                </Box> 
            </Modal>}
        </Grid>
    )
}

export default Todos