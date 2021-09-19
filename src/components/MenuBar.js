import { Grid, AppBar, Typography, Button } from "@material-ui/core";

export default function MenuBar(props) {
  return (
    <Grid
      component={AppBar}
      position='static'
      alignContent='center'
      alignItems='center'
      style={{
        height: 40,
        flexDirection: "row",
        backgroundColor: "white",
        color: "#111",
        boxShadow: "none",
      }}
    >
      <Grid item>
        <Typography>Your to-do list</Typography>
      </Grid>
      <Grid item style={{ flexGrow: 1 }}></Grid>
      <Grid item>
        <Button onClick={props.toggleDialog}> + </Button>
      </Grid>
    </Grid>
  );
}
