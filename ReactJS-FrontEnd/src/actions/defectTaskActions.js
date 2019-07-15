
import axios from "axios";
import {GET_ERRORS, GET_DEFECT_TASKS,DELETE_DEFECT_TASKS,GET_DEFECT_TASK} from "./types";

export const addDefectTask=(defect_task, history)=>async dispatch =>{
    try{
        await axios.post("http://localhost:8080/projectboard/saveDefect", defect_task);
    history.push("/defectBoard");
    } catch(error){
        dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        })
    }
    
};

export const getBacklog=()=>async dispatch =>{
    const res = await axios.get("http://localhost:8080/projectboard/getAllDefect")
    dispatch({
        type:GET_DEFECT_TASKS,
        payload:res.data
    });
}



export const deleteDefectTask = pt_id => async dispatch =>{
    if(
    window.confirm(
    `you are deleting project task ${pt_id}, this action cannot be undone`
    )
    ){
    await axios.delete(`http://localhost:8080/projectboard/deleteDefect/${pt_id}`);
    dispatch({
    type:DELETE_DEFECT_TASKS,
    payload:pt_id
    });
    }
    }; 

    export const getDefectTask = (pt_id, history) => async dispatch =>{
        try{
       const res = await axios.get(`http://localhost:8080/projectboard/getDefectId/${pt_id}`);
       dispatch({
        type:GET_DEFECT_TASK,
        payload:res.data
    });  
        } catch(error){
        // history.push("/")
        }
    };