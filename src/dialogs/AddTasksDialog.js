import { Component, useState, setState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@material-ui/core";
import { Database } from "../firebase";

const AddTasksDialog = (props) => {
  const { setTasks, tasks, toggleDialog, open } = props;
  const [myForm, setMyForm] = useState({ taskName: "" });

  const onTextfieldChange = (event) => {

    // getting text field name
    const fieldName = event.target.name;
    let myUpdatedForm = { ...myForm };

    // matched name in updated form is equal to the value from text field.
    myUpdatedForm[fieldName] = event.target.value;

    // then updated.
    setMyForm(myUpdatedForm);
  };

  const addTask = () => {
    let updatedTasks = [...tasks];
    const taskData = { title: myForm["taskName"], done: false };
    Database.collection("tasks")
      .add(taskData)
      .then((documentRef) => {
        updatedTasks.push(taskData);
        console.log(updatedTasks);
        setTasks(updatedTasks);
        toggleDialog();
        setMyForm({ taskName: "" });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
        <Dialog open={open} onClose={toggleDialog}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            label={"Task Name"}
            style={{ width: "100%" }}
            name='taskName'
            value={myForm["taskName"]}
            onChange={onTextfieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={addTask}>Save</Button>
        </DialogActions>
      </Dialog>
  );
};

export default AddTasksDialog;
