import {Grid, AppBar, Typography, Button } from "@material-ui/core"

export default function MenuBar(props) {
    return <Grid component={AppBar} position="static" alignContent='center' alignItems='center' style={{height:40, padding: "5px", flexDirection:'row', backgroundColor: "#D6D9DF", color: "#111", boxShadow: "none"}}>
        <Grid item>
            <Typography>To-do list</Typography>
        </Grid>
        <Grid item style={{flexGrow:1}}></Grid>
        <Grid item>
        </Grid>
    </Grid>
}