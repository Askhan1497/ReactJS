import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Hello Todo"}],
    edit: [{id: null, text: null}]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },
        editTodo: (state, action) => {
            state.edit = action.payload;
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if(action.payload.id === todo.id){
                    todo.text = action.payload.text
                }
                return todo;
            })
            state.edit = {id: null, text: null}
        }
    }

})


export const {addTodo, removeTodo, updateTodo, editTodo} =  todoSlice.actions


export default todoSlice.reducer