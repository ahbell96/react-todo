import {React, setState, useState} from 'react';
import {Grid, Typography, Button, Checkbox} from "@material-ui/core";

const TaskItem = ({data}) => {

    const currentCheckboxState = data.done;
    const [toggleCheckbox, setToggleCheckbox] = useState({currentCheckboxState});

    const setCheckbox = () => {
        setToggleCheckbox(!toggleCheckbox);
        console.log(toggleCheckbox);
    }

    return (
    <Grid container>
    {console.log(toggleCheckbox)}
        <Grid item>
            <Typography>{data.title}</Typography>
        </Grid>
        <Grid item style={{flexGrow: 1}}/>
        <Grid item>
            <Checkbox onClick={() => setToggleCheckbox(!toggleCheckbox)} checked={toggleCheckbox}></Checkbox>
        </Grid>
    </Grid>
    )
}

export default TaskItem;