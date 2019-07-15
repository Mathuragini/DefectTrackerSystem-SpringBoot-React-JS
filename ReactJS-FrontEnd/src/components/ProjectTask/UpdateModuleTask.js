import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {getModuleTask, addModuleTask} from "../../actions/moduleTaskActions";

 class UpdateModuleTask extends Component{

constructor(){
    super();
    this.state={
             mId:"",
             moduleName:"",
             id:"",
             module1:[]
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}    


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
    }
const{mId,moduleName,id} = nextProps.module_task;

this.setState({
    mId,
    moduleName,
    id
});

}

componentDidMount(){
    const {pt_id} = this.props.match.params;
    this.props.getModuleTask(pt_id);
}

onSubmit(e){
e.preventDefault()
const updatedTask = {
    mId:this.state.mId,
        moduleName:this.state.moduleName,
        id:this.state.id
        
};

this.props.addModuleTask(updatedTask, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        const {errors}= this.state;
        return(
<div className="addModuleTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/moduleBoard" className="btn btn-light">
                        Back to Board
                </Link>
                    <h4 className="display-4 text-center">Update Module Task</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control form-control-lg" 
                            name="mId" 
                            placeholder="Module ID" disabled
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Module Name" 
                            name="moduleName"
                            value={this.state.moduleName}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             name="id"
                             value={this.state.id}
                             onChange={this.onChange}
                             >
                             <option value="Select">Select the option</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
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


UpdateModuleTask.propTypes={
    module_task:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    getModuleTask:PropTypes.func.isRequired,
    addModuleTask:PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    module_task:state.module_task.module_task,
    errors:state.errors
});

export default connect(
    mapStateToProps,
     {getModuleTask, addModuleTask}
     ) (UpdateModuleTask);
