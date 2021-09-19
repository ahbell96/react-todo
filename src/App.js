import { Grid, Card, Typography } from "@material-ui/core";

import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./components/MenuBar";
import TasksList from "./components/TasksList";
import AddTasksDialog from "./dialogs/AddTasksDialog";
import { Component } from "react";
import { Database } from "./firebase";
import Button from "./components/Button";

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
      <Grid
        container
        justify='center'
        alignContent='center'
        alignItems='center'
        style={{ height: "100vh", backgroundColor: "#D6D9DF" }}
      >
        <AddTasksDialog
          setTasks={this.setTasks}
          tasks={this.state.tasks}
          open={this.state.addTaskDialog}
          toggleDialog={this.toggleDialog}
        ></AddTasksDialog>
        <Card
          style={{
            width: "40%",
            boxShadow: "none",
            backgroundColor: "#D6D9DF",
          }}
        >
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
          <Grid container direction="row-reverse">
            <Button toggleDialog={this.toggleDialog} />
          </Grid>
        </Card>
      </Grid>
    );
  }
}
