import {Component} from 'react'
import {Grid} from '@material-ui/core';
import TaskItem from './TaskItem';

export default class TasksList extends Component {

    render() {
       // const {item, updatetaskAtIndex} = thgis.props;
        return <div>
            {this.props.tasks.map((item, index) => {
                return <TaskItem data={item} key={index} index={index} /*toggleDone={()=>updateTaskAtIndex({...item, ...{done:!item.done}}, index)}*/ done={item.done} updateTaskAtIndex={this.props.updateTaskAtIndex} deleteTask={this.props.deleteTask} />
            })}
        </div>
    }
}