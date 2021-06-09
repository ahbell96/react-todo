import {Component, useState} from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button} from "@material-ui/core"

const AddTasksDialog = (props) => {
    const {setTasks, tasks, toggleDialog, open} = props;
    const [myForm, setMyForm] = useState({taskName:""});
    const onTextfieldChange = (event) => {
        const fieldName = event.target.name;
        let myUpdatedForm = {...myForm};
        
        myUpdatedForm[fieldName] = event.target.value;
        setMyForm(myUpdatedForm);
    }

    const addTask = () => {
        let updatedTasks = [...tasks];
        updatedTasks.push({title: myForm["taskName"], done: false});
        setTasks(updatedTasks);
        toggleDialog();
        setMyForm({taskName:""});
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