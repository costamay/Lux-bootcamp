import tasksTypes from "./tasks.types";

export const TASKS_INITIAL_STATE = {
    tasks: [
        {
            title: 'Task 1',
             id:'2'
        }
    ]
}
const tasksReducer = (state, action) => {
    switch(action.type){
        case tasksTypes.CREATE_TASK:
            return  {
                ...state,
                tasks: [
                    action.payload,
                    ...state.tasks
                ]
            };
        default:
            return state
    }

}

export default tasksReducer;