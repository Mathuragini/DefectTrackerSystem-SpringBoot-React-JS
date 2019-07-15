import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{connect} from "react-redux";
import {deleteDefectTask ,getBacklog}from "../../actions/defectTaskActions";
// import {getModuleTask} from "../../actions/moduleTaskActions"

 class DefectTaskItem extends Component{
onDeleteClick(pt_id){
this.props.deleteDefectTask(pt_id);
}

    render(){
        const{defect_task}=this.props;
        return(
            <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                ID: {defect_task.dId}
            </div>
            <div className="card-body bg-light">
           <h5 className="card-title"> Description : {defect_task.description}</h5>
              <h6>ModuleID: {defect_task.mId}</h6> 
              <h6>Severity : {defect_task.severity}</h6>
              <h6>Priority : {defect_task.priority}</h6> 
              <h6>DefectType : {defect_task.defectType}</h6> 
              <h6>EnteredBy : {defect_task.enteredBy}</h6> 
              <h6>AssignedTo : {defect_task.assignedTo}</h6>  
              <h6>EnteredDate : {defect_task.enteredDate}</h6>  
              <h6>FixedDate : {defect_task.fixedDate}</h6>  
             
                <Link  
                to = {`updateDefectTask/${defect_task.dId}`} className="btn btn-primary"
                >
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this,defect_task.dId)}
                >Delete
                </button>
               
            </div>
        </div>
        );
    }
    }

    DefectTaskItem.propTypes={
        deleteDefectTask:PropTypes.func.isRequired
    };


    export default  connect(
    null,
    {deleteDefectTask}
    )(DefectTaskItem); 