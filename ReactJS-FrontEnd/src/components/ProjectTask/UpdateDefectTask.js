import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
import {getDefectTask, addDefectTask} from "../../actions/defectTaskActions";

 class UpdateDefectTask extends Component{

constructor(){
    super();
    this.state={
        dId:"",
             mId:"",
             description:"",
             severity:"" ,
             priority:"",
             defectType:"",
             enteredBy:"",
             assignedTo:"",
             enteredDate:"",
             fixedDate:""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}    


componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors: nextProps.errors});
    }
const{dId,mId,description,severity,priority,defectType,enteredBy,assignedTo,enteredDate,fixedDate} = nextProps.defect_task;

this.setState({
    dId,
    mId,
    description,
    severity,
    priority,
    defectType,
    enteredBy,
    assignedTo,
    enteredDate,
    fixedDate
});

}

componentDidMount(){
    const {pt_id} = this.props.match.params;
    this.props.getDefectTask(pt_id);
}

onSubmit(e){
e.preventDefault()
const updatedTask = {
        dId:this.state.dId,
        mId:this.state.mId,
        description:this.state.description,
        severity:this.state.severity,
        priority:this.state.priority,
        defectType:this.state.defectType,
        enteredBy:this.state.enteredBy,
        assignedTo:this.state.assignedTo,
        enteredDate:this.state.enteredDate,
        fixedDate:this.state.fixedDate
        
};

this.props.addDefectTask(updatedTask, this.props.history);
}

onChange(e){
    this.setState({[e.target.name]:e.target.value})
}

    render(){
        const {errors}= this.state;
        return(
<div className="addDefectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <Link to="/defectBoard" className="btn btn-light">
                        Back to Board
                </Link>
                    <h4 className="display-4 text-center">Update Defect Task</h4>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                            <input type="text" 
                            name="dId"
                            className="form-control form-control-lg"          
                            placeholder="Defect ID" disabled                          
                            />
                           
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Description" 
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            />
                          
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="severity" 
                             name="severity"
                             value={this.state.severity}
                             onChange={this.onChange}
                             >
                              <option value="">Select the severity</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>


                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="Enter the module ID" 
                            name="mId"
                            value={this.state.mId}
                            onChange={this.onChange}
                            />
                          
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="priority" 
                             name="priority"
                             value={this.state.priority}
                             onChange={this.onChange}
                             >
                             <option value="">Select the priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="defectType" 
                             name="defectType"
                             value={this.state.defectType}
                             onChange={this.onChange}
                             >
                              <option value="">Select the defectType</option>
                                <option value="UI">UI</option>
                                <option value="Functionality">Functionality</option>
                                <option value="Enhancement">Enhancement</option>
                                <option value="Performance">Performance</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="enteredBy" 
                             name="enteredBy"
                             value={this.state.enteredBy}
                             onChange={this.onChange}
                             >
                             <option value="">Entered By</option>
                                <option value="Mathu">Mathu</option>
                                <option value="Pinky">Pinky</option>
                                <option value="Thamy">Thamy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <select className="form-control form-control-lg"
                             placeholder="assignedTo" 
                             name="assignedTo"
                             value={this.state.assignedTo}
                             onChange={this.onChange}
                             >
                              <option value="">Assigned To</option>
                                <option value="Mathu">Mathu</option>
                                <option value="Pinky">Pinky</option>
                                <option value="Thamy">Thamy</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="enteredDate" 
                            name="enteredDate"
                            value={this.state.enteredDate}
                            onChange={this.onChange}
                            />
                          
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="form-control form-control-lg" 
                            placeholder="fixedDate" 
                            name="fixedDate"
                            value={this.state.fixedDate}
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


UpdateDefectTask.propTypes={
    defect_task:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    getDefectTask:PropTypes.func.isRequired,
    addDefectTask:PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
    defect_task:state.defect_task.defect_task,
    errors:state.errors
});

export default connect(
    mapStateToProps,
     {getDefectTask, addDefectTask}
     ) (UpdateDefectTask);
