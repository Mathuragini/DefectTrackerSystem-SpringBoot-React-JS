import {combineReducers} from "redux"
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import moduleTaskReducer from "./moduleTaskReducer";
import defectTaskReducer from"./defectTaskReducer";

export default combineReducers({

errors:errorsReducer,
project_task: projectTaskReducer,
module_task: moduleTaskReducer,
defect_task:defectTaskReducer

});