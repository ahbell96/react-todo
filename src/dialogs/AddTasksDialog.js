import {Component, useState, setState} from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button} from "@material-ui/core"
import { Database } from '../firebase';

const AddTasksDialog = (props) => {

    const {setTasks, tasks, toggleDialog, open} = props;
    const [myForm, setMyForm] = useState({taskName:""});

    const onTextfieldChange = (event) => {
        const fieldName = event.target.name;
        console.log(myForm);
        let myUpdatedForm = {...myForm};
        console.log(myUpdatedForm);
        
        myUpdatedForm[fieldName] = event.target.value;
        setMyForm(myUpdatedForm);
    }

    const addTask = () => {
        let updatedTasks = [...tasks];
        const taskData = {title: myForm["taskName"], done: false};
        Database.collection("tasks").add(taskData).then(documentRef => {
            updatedTasks.push(taskData);
            setTasks(updatedTasks);
            toggleDialog();
            setMyForm({taskName:""});
        });
    }


    return (
        <Dialog open={open}>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <TextField label={"Task Name"} style={{width: "100%"}} name="taskName" value={myForm['taskName']} onChange={onTextfieldChange}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={addTask}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTasksDialog;