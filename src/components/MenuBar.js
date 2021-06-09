import {Grid, AppBar, Typography, Button } from "@material-ui/core"

export default function MenuBar(props) {
    return <Grid component={AppBar} position="static" style={{height:40, flexDirection:'row'}}>
        <Grid item>
            <Typography>To do</Typography>
        </Grid>
        <Grid item style={{flexGrow:1}}></Grid>
        <Grid item>
            <Button onClick={props.toggleDialog}> + </Button>
        </Grid>
    </Grid>
}