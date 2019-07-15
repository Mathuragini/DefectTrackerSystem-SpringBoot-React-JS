import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{connect} from "react-redux";
import {deleteModuleTask ,getBacklog}from "../../actions/moduleTaskActions";
import {getProjectTask} from "../../actions/projectTaskActions";

 class ModuleTaskItem extends Component{
onDeleteClick(pt_id){
this.props.deleteModuleTask(pt_id);
}

    render(){
        const{module_task}=this.props;
        
        return(
            <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                ID: {module_task.mId}
            </div>
            <div className="card-body bg-light">
              <h5 className="card-title">{module_task.moduleName}</h5>
              
              {/* <div>
                ProjectID: {module_task.id}
                </div> */}

                <Link  
                to = {`updateModuleTask/${module_task.mId}`} className="btn btn-primary"
                >
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this,module_task.mId )}
                >Delete
                </button>
               
            </div>
        </div>
        );
    }
    }

    ModuleTaskItem.propTypes={
        deleteModuleTask:PropTypes.func.isRequired
    };


    export default  connect(
    null,
    {deleteModuleTask}
    )(ModuleTaskItem); 