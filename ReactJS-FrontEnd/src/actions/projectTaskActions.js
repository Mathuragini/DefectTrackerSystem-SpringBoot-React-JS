
import axios from "axios";
import {GET_ERRORS, GET_PROJECT_TASKS,DELETE_PROJECT_TASKS,GET_PROJECT_TASK} from "./types";

export const addProjectTask=(project_task, history)=>async dispatch =>{
    try{
        await axios.post("http://localhost:8080/projectboard/save", project_task);
    history.push("/");
    } catch(error){
        return dispatch({
            type: GET_ERRORS,
            payload:error.response.data
        })
    }
    
};

export const getBacklog=()=>async dispatch =>{
    const res = await axios.get("http://localhost:8080/projectboard/getAll")
    dispatch({
        type:GET_PROJECT_TASKS,
        payload:res.data
    });
}



export const deleteProjectTask = pt_id => async dispatch =>{
    if(
    window.confirm(
    `you are deleting project task ${pt_id}, this action cannot be undone`
    )
    ){
    await axios.delete(`http://localhost:8080/projectboard/delete/${pt_id}`);
    dispatch({
    type:DELETE_PROJECT_TASKS,
    payload:pt_id
    });
    }
    }; 

    export const getProjectTask = (pt_id, history) => async dispatch =>{
        try{
       const res = await axios.get(`http://localhost:8080/projectboard/getId/${pt_id}`);
       dispatch({
        type:GET_PROJECT_TASK,
        payload:res.data
    });  
        } catch(error){
         // history.push("/")
        }
    };