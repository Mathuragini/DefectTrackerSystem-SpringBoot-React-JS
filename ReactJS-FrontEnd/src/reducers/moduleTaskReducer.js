import {GET_MODULE_TASKS,DELETE_MODULE_TASKS, GET_MODULE_TASK} from "../actions/types";

const initialState={
    module_tasks:[],
    module_task:{}
}

export default function (state = initialState, action){
    switch (action.type){

        case GET_MODULE_TASKS:
        return{
            ...state,
            module_tasks:action.payload
        };

        case GET_MODULE_TASK:
        return{
            ...state,
            module_task:action.payload
        }

        case DELETE_MODULE_TASKS:
        return{
            ...state,
            module_tasks:state.module_tasks.filter(
                module_task => module_task.mId !== action.payload
            )
        };
        default:
        return state;
    }
}