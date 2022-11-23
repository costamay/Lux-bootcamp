import tasksTypes from "./tasks.types";
import { removeFromArray } from "./posts.utils";

export const TASKS_INITIAL_STATE = {
    tasks: [
        {
            title: 'Task 1',
             id:'2'
        }
    ]
}
const tasksReducer = (state = TASKS_INITIAL_STATE, action) => {
    
    switch(action.type){
        case tasksTypes.CREATE_TASK:
            return  {
                ...state,
                tasks: [
                    action.payload,
                    ...state.tasks
                   
                ]
            };
        case tasksTypes.REMOVE_TASK:
            const newTaskList = state.tasks.filter((task) => task.id !== action.payload)
            return{
                ...state,
                tasks: newTaskList
            }
        default:
            return state
    }

}

export default tasksReducer;