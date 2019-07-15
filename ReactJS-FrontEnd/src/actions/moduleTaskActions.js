
import axios from "axios";
import {GET_ERRORS, GET_MODULE_TASKS,DELETE_MODULE_TASKS,GET_MODULE_TASK} from "./types";

export const addModuleTask=(module_task, history)=>async dispatch =>{
    try{
        console.log(module_task)
        await axios.post("http://localhost:8080/projectboard/saveModule", module_task);
    history.push("/moduleBoard");
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        })
    }
    
};


export const getBacklog=()=>async dispatch =>{
    const res = await axios.get("http://localhost:8080/projectboard/getAllModule")
    dispatch({
        type:GET_MODULE_TASKS,
        payload:res.data
    });
}



export const deleteModuleTask = pt_id => async dispatch =>{
    if(
    window.confirm(
    `you are deleting module task ${pt_id}, this action cannot be undone`
    )
    ){
    await axios.delete(`http://localhost:8080/projectboard/deleteModule/${pt_id}`);
    dispatch({
    type:DELETE_MODULE_TASKS,
    payload:pt_id
    });
    }
    }; 

    export const getModuleTask = (pt_id, history) => async dispatch =>{
        try{
       const res = await axios.get(`http://localhost:8080/projectboard/getModuleId/${pt_id}`);
       dispatch({
        type:GET_MODULE_TASK,
        payload:res.data
    });  
        } catch(error){
         // history.push("/moduleBoard")
        }
    };