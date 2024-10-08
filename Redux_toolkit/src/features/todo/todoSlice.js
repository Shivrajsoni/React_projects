import { createSlice,nanoid } from "@reduxjs/toolkit"


const initialState = {
    todos:[
        {
            id:1,
            text:"HEllo TODO"
        }
    ]
}

export const todoSlice =  createSlice({
    name:"todo",
    initialState,
    // PROPRETIES AND FUNCTION ALL DECLARED HERE AND THERE IS INITIAL STATE WHICH IS PASSED AND STATE IS MANAGED
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !==action.payload)
        }
    }
})


export  const { addTodo,removeTodo} =todoSlice.actions // type of action handled by the splice reducers

// we will export functionalites of reducers and manage states through it 

export default todoSlice.reducer