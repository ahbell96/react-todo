import {Component} from 'react'
import {Grid} from '@material-ui/core';
import TaskItem from './TaskItem';
import { Database } from '../firebase';
export default class TasksList extends Component {

    componentDidMount() {
        const self = this
        Database.collection("tasks").get().then(querySnapshot => {
          const documentsData = querySnapshot.docs.map(documentRep => ({...documentRep.data(), ...{id : documentRep.id}}))
          self.props.setTasks(documentsData);
        }); 
    }

    deleteTask = (task) => {
        const self = this;
        Database.collection("tasks").doc(task.id).delete().then(()=>{
            const taskIndex = self.props.tasks.indexOf(task);
            let updatedTasks = [...self.props.tasks];
            updatedTasks.splice(taskIndex, 1);
            self.props.setTasks(updatedTasks);
        })
        
      }

    render() {
       // const {item, updatetaskAtIndex} = thgis.props;
        return <div>
            {this.props.tasks.map((item, index) => {
                return <TaskItem data={item} key={index} index={index} /*toggleDone={()=>updateTaskAtIndex({...item, ...{done:!item.done}}, index)}*/ done={item.done} updateTaskAtIndex={this.props.updateTaskAtIndex} deleteTask={this.deleteTask} />
            })}
        </div>
    }
}