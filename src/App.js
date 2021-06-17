import { Grid, Card, Typography } from "@material-ui/core";

import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar";
import TasksList from "./components/TasksList";
import AddTasksDialog from "./dialogs/AddTasksDialog";
import { Component } from "react";
import Firebase from './firebase';

export default class App extends Component {
  state = {
    tasks: [
      { title: "Walk dog", done: true },
      { title: "Feed dog", done: false },
      { title: "Clean the bins", done: false },
    ],
    addTaskDialog: false,
  };

  // initialises after DOM load.
  componentDidMount() {
    console.log(Firebase);
  }

  toggleDialog = () => {
    this.setState({addTaskDialog:!this.state.addTaskDialog});
  }


  setTasks = (t) => this.setState({
    tasks : t
  })

  updateTaskAtIndex = (updatedTask, index) => {
    
    // actual copy of state item
    let updatedTasks = [...this.state.tasks];
    updatedTasks[index] = updatedTask;
    this.setState({tasks : updatedTasks});
  }

  deleteTask = (task) => {
    const taskIndex = this.state.tasks.indexOf(task);
    let updatedTasks = [...this.state.tasks];
    updatedTasks.splice(taskIndex, 1);
    this.setState({tasks: updatedTasks});
  }


  render() {
    return (
      <Grid container justify='center'>
        <AddTasksDialog setTasks={this.setTasks} tasks={this.state.tasks} open={this.state.addTaskDialog} toggleDialog={this.toggleDialog}></AddTasksDialog>
        <Card style={{ width: 400 }}>
          <Grid container direction={"column"}>
            <Grid item style={{ flexGrow: 1 }}>
              <MenuBar toggleDialog={this.toggleDialog} />
            </Grid>
            <Grid item>
              <TasksList tasks={this.state.tasks} updateTaskAtIndex={this.updateTaskAtIndex} deleteTask={this.deleteTask}/>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}
