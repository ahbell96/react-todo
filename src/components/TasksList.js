import {Component} from 'react'
import {Grid} from '@material-ui/core';
import TaskItem from './TaskItem';

const days = ["Monday",  "tuesday", "wednesday"];

export default class TasksList extends Component{
    state = { 
        tasks: [
            {title:"Walk dog", done:false},
            {title:"Feed dog", done:false},
            {title:"Clean the bins", done:false}
        ],
    }



    render() {
        return <div>
            {this.state.tasks.map((item, index) => {
                return <TaskItem data={item} key={index}/>
            })}
        </div>
    }
}