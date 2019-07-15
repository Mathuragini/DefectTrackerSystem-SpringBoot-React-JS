import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {addProjectTask} from "../../actions/projectTaskActions";



 class AddProjectTask extends Component{
     constructor(){
         super();
         this.state={
             projectName:""
            
          
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);
     }

     componentWillReceiveProps(nextProps){
if(nextProps.errors){
    this.setState({errors:nextProps.errors})
}
     }

onChange(e){
this.setState({[e.target.name]:e.target.value})
}

onSubmit(e){
    e.preventDefault();
    const newProjectTask={
        projectName:this.state.projectName

    };
    console.log(newProjectTask);
    this.props.addProjectTask(newProjectTask, this.props.history)
}

    render(){
        const{errors}=this.state;
        return(
<div className="addProjectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add Project Task</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            
                            className="form-control form-control-lg"
                            name="projectId"                            
                            placeholder="Project ID" disabled                          
                            />
                           
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="project Name" 
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

AddProjectTask.propTypes={
    addProjectTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addProjectTask}) (AddProjectTask);