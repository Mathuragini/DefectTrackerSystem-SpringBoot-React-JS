import React,{Component}from 'react';
import {Link} from "react-router-dom";
import ModuleTaskItem from './ProjectTask/ModuleTaskItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../actions/moduleTaskActions";
 class ModuleBoard extends Component{

     componentDidMount(){
         this.props.getBacklog();
     }
    render(){
        const{module_tasks}=this.props.module_tasks

        let BoardContent;
        let todoItems=[]
        

const BoardAlgorithm = module_tasks => {
    if(module_tasks.length < 1){
        return (
           < div className="alert alert-info text-center" role="alert"
           No Modules Tasks on this Board
           ></div>
        );
    } else {
        const tasks= module_tasks.map(module_task =>(
            <ModuleTaskItem key={module_task.mId} module_task={module_task}/>
        ));

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].props.module_task.moduleName!==""){
                todoItems.push(tasks[i])
                }
        }

        return(
            <React.Fragment>

<div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>ModuleBoard</h3>
                        </div>
                    </div>
                  {todoItems}                    
                </div>

            </div>
        </div>
            </React.Fragment>
        )
    }
};

BoardContent= BoardAlgorithm(module_tasks);

        return(
    <div className="container">
        <Link to="/addModuleTask" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Module Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
       
    </div>

        )
       
    }
}

ModuleBoard.propTypes={
    getBacklog:PropTypes.func.isRequired,
    module_tasks:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    module_tasks:state.module_task
})


export default connect(
    mapStateToProps,
    {getBacklog}
    )(ModuleBoard); 