import { Grid, Card, Typography } from "@material-ui/core";

import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar";
import TasksList from "./components/TasksList";
import AddTasksDialog from "./dialogs/AddTasksDialog";
import { Component } from "react";

export default class App extends Component {
  state = {
    tasks: [
      { title: "Walk dog", done: false },
      { title: "Feed dog", done: false },
      { title: "Clean the bins", done: false },
    ],
    addTaskDialog: false,
  };


  toggleDialog = () => {
    this.setState({addTaskDialog:!this.state.addTaskDialog});
  }


  setTasks = (t) => this.setState({
    tasks : t
  })

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
              <TasksList tasks={this.state.tasks}/>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}
