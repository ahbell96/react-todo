import { Grid, Card, Typography } from "@material-ui/core";

import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar";
import TasksList from "./components/TasksList";
import AddTasksDialog from "./dialogs/AddTasksDialog";
import { Component } from "react";
import { Database } from "./firebase";

export default class App extends Component {
  state = {
    tasks: [],
    addTaskDialog: false,
  };

  // initialises after DOM load.

  toggleDialog = () => {
    this.setState({ addTaskDialog: !this.state.addTaskDialog });
  };

  setTasks = (t) =>
    this.setState({
      tasks: t,
    });

  updateTaskAtIndex = (updatedTask, index) => {
    // updatedTasks - direct copy of tasks.
    let updatedTasks = [...this.state.tasks];
    updatedTasks[index] = updatedTask;
    this.setState({ tasks: updatedTasks });
  };

  render() {
    return (
      <Grid container justify='center' alignContent='center' alignItems='center' style={{height: "100vh"}}>
        <AddTasksDialog
          setTasks={this.setTasks}
          tasks={this.state.tasks}
          open={this.state.addTaskDialog}
          toggleDialog={this.toggleDialog}
        ></AddTasksDialog>
        <Card style={{ width: "40%" }}>
          <Grid container direction={"column"}>
            <Grid item style={{ flexGrow: 1 }}>
              <MenuBar toggleDialog={this.toggleDialog} />
            </Grid>
            <Grid item>
              <TasksList
                tasks={this.state.tasks}
                updateTaskAtIndex={this.updateTaskAtIndex}
                setTasks={this.setTasks}
                deleteTask={this.deleteTask}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  }
}
