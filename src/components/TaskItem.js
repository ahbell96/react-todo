import React from 'react';
import {Grid, Typography, Button, Checkbox} from "@material-ui/core";

const TaskItem = ({data}) => {
    return (
    <Grid container>
        <Grid item>
            <Typography>{data.title}</Typography>
        </Grid>
        <Grid item style={{flexGrow: 1}}/>
        <Grid item>
            <Checkbox checked={data.done}></Checkbox>
        </Grid>
    </Grid>


    )
}

export default TaskItem;