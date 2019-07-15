import React,{Component}from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types"
import{connect} from "react-redux";
 import {addModuleTask} from "../../actions/moduleTaskActions";
 import axios from "axios";
 
 class AddModuleTask extends Component{
     constructor(){
         super();
         this.state={
             moduleName:"",
             id:"" ,
             module1:[]
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
        moduleName:this.state.moduleName,
        
        id:this.state.id
    };
   // let data=JSON.stringify(newProjectTask)
   console.log(newProjectTask);
    this.props.addModuleTask(newProjectTask, this.props.history)
}
componentDidMount(){
    fetch('http://localhost:8080/projectboard/getAll')
        .then(response => {
            if (!response.ok) {
                throw Error('Network request failed.')
            }
            return response;
        })
        .then(data => data.json())
        .then((data)=>{
            let module1=data.map((post)=>{
                return(
                   
                    <option value={post.id} >{post.projectName}</option>
                );

            })
            this.setState({module1});
           
         } ); 
}

getmodule(){
     }



    render(){
        const{errors}=this.state;
        return(
<div className="addModuleTask">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <Link to="/moduleBoard" className="btn btn-light">
                        Back to Board
                    </Link>
                    <h4 className="display-4 text-center">Add Module Task</h4>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            
                            className="form-control form-control-lg"          
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
                              <option value="" >Select the Project Name</option>,
                                {this.state.module1}
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

AddModuleTask.propTypes={
    addModuleTask:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    errors:state.errors
})

export default connect(mapStateToProps, {addModuleTask}) (AddModuleTask);