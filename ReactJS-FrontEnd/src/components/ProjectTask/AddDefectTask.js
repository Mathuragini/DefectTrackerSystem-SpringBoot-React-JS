import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
 import {addDefectTask} from "../../actions/defectTaskActions"
 
 class AddDefectTask extends Component{
     constructor(){
         super();
         this.state={
             description:"",
             mId:"",
             severity:"" ,
             priority:"",
             defectType:"",
             enteredBy:"",
             assignedTo:"",
             enteredDate:"",
             fixedDate:""
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
        description:this.state.description,
        severity:this.state.severity,
        priority:this.state.priority,
        defectType:this.state.defectType,
        enteredBy:this.state.enteredBy,
        assignedTo:this.state.assignedTo,
        enteredDate:this.state.enteredDate,
        fixedDate:this.state.fixedDate,
        mId:this.state.mId,
       
       

    };
    console.log(newProjectTask);
    this.props.addDefectTask(newProjectTask, this.props.history)
}


componentDidMount(){
    fetch('http://localhost:8080/projectboard/getAllModule')
        .then(response => {
            if (!response.ok) {
                throw Error('Network request failed.')
            }
            return response;
        })
        .then(data => data.json())
        .then((data)=>{
            let defect=data.map((post)=>{
                return(
                   
                    <option value={post.mId} >{post.moduleName}</option>
                );

            })
            this.setState({defect});
           
         } ); 
}


    render(){
        const{errors}=this.state;
        return(
<div className="addDefectTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/defectBoard" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add Defect Task</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            
                            className="form-control form-control-lg"          
                            placeholder="Defect ID" disabled                          
                            />
                           
                        </div>

                        <div className="form-group">
                        <input type="text"  
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
                            <select className="form-control form-control-lg"
                             placeholder="mId" 
                             name="mId"
                             value={this.state.mId}
                             onChange={this.onChange}
                             >
                             <option value="" >Select the Module Name</option>,
                                {this.state.defect}
                            </select>
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
                        <input type="date" 
                            className="form-control form-control-lg" 
                            placeholder="enteredDate" 
                            name="enteredDate"
                            value={this.state.enteredDate}
                            onChange={this.onChange}
                            />
                          
                        </div>

                        <div className="form-group">
                        <input type="date" 
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

AddDefectTask.propTypes={
    addDefectTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addDefectTask }) (AddDefectTask);