import {GET_DEFECT_TASKS,DELETE_DEFECT_TASKS, GET_DEFECT_TASK} from "../actions/types";

const initialState={
    defect_tasks:[],
    defect_task:{}
}

export default function (state = initialState, action){
    switch (action.type){

        case GET_DEFECT_TASKS:
        return{
            ...state,
            defect_tasks:action.payload
        };

        case GET_DEFECT_TASK:
        return{
            ...state,
            defect_task:action.payload
        }

        case DELETE_DEFECT_TASKS:
        return{
            ...state,
            defect_tasks:state.defect_tasks.filter(
                defect_task => defect_task.dId !== action.payload
            )
        };
        default:
        return state;
    }
}