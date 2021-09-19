import {React, setState, useState} from 'react';
import {Grid, Typography, Button, Checkbox} from "@material-ui/core";

const TaskItem = ({data, done, index, updateTaskAtIndex, deleteTask}) => {

    const toggleCheckbox = () => {
        data.done = !data.done;
        updateTaskAtIndex(data, index);
    }

    return (
    <Grid container alignContent='center' alignItems='center' style={{border: "1px solid #fff", borderRadius: "10px", backgroundColor: "#fff", margin: "5px 0"}}>
        <Grid item>
            <Checkbox onClick={(e) => toggleCheckbox()} checked={data.done}></Checkbox>
        </Grid>
        <Grid item style={{width: "200px"}}>
            <Typography>{data.title}</Typography>
        </Grid>

        <Grid item style={{flexGrow: 1}}/>
        
        <Grid item>
            {data.done ? <Button onClick={() => deleteTask(data)}>Delete</Button> : ""}
        </Grid>
    </Grid>
    )
}

export default TaskItem;