import {Component} from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button} from "@material-ui/core"

const AddTasksDialog = () => {

    return (
        <Dialog open>
            <DialogTitle>Add Task</DialogTitle>
            <DialogContent>
                <TextField label={"Task Name"} style={{width: "100%"}}>

                </TextField>
            </DialogContent>
            <DialogActions>
                <Button>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddTasksDialog;