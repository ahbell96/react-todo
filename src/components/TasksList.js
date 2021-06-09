import {Component} from 'react'
import {Grid} from '@material-ui/core';
import TaskItem from './TaskItem';

export default class TasksList extends Component{
    render() {
        return <div>
            {this.props.tasks.map((item, index) => {
                return <TaskItem data={item} key={index}/>
            })}
        </div>
    }
}