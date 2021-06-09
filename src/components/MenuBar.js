import {Grid, AppBar, Typography, Button } from "@material-ui/core"

export default function MenuBar() {
    return <Grid component={AppBar} position="static" style={{height:40, flexDirection:'row'}}>
        <Grid item>
            <Typography>To do</Typography>
        </Grid>
        <Grid item style={{flexGrow:1}}></Grid>
        <Grid item>
            <Button> + </Button>
        </Grid>
    </Grid>
}