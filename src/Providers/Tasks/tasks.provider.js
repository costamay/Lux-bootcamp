import React, { createContext, useReducer} from "react";
import tasksReducer, { TASKS_INITIAL_STATE } from "./tasks.reducer";
import tasksTypes from "./tasks.types";
export const TasksContext = createContext({
    ...TASKS_INITIAL_STATE
});

const TasksProvider = ({children}) => {
    const [store, dispatch] = useReducer(tasksReducer, TASKS_INITIAL_STATE);
    const { tasks } = store;

    const createTask = task => {
        dispatch({
            type: tasksTypes.CREATE_TASK,
            payload: task
        })
    }
    return(
        <TasksContext.Provider value={{
            tasks,
            createTask 
        }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;