import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {getProjectTask, addProjectTask} from "../../actions/projectTaskActions";

 class UpdateProjectTask extends Component{

constructor(){
    super();
    this.state={
             id:"",
             projectName:""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}    


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
    }
const{ id,projectName} = nextProps.project_task;

this.setState({
    id,
    projectName
});

}

componentDidMount(){
    const {pt_id} = this.props.match.params;
    this.props.getProjectTask(pt_id);
}

onSubmit(e){
e.preventDefault()
const updatedTask = {
        id:this.state.id,
        projectName:this.state.projectName
        
};

this.props.addProjectTask(updatedTask, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        const {errors}= this.state;
        return(
<div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/" className="btn btn-light">
                        Back to Board
                </Link>
                    <h4 className="display-4 text-center">Update Project Task</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="projectId" 
                            placeholder="Project ID" disabled
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Project Name" 
                            name="projectName"
                            value={this.state.projectName}
                            onChange={this.onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

        )
    }
}


UpdateProjectTask.propTypes={
    project_task:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    getProjectTask:PropTypes.func.isRequired,
    addProjectTask:PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    project_task:state.project_task.project_task,
    errors:state.errors
});

export default connect(
    mapStateToProps,
     {getProjectTask, addProjectTask}
     ) (UpdateProjectTask);
