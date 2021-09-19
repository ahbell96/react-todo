import {Button, Typography} from "@material-ui/core";

const globalButton = (props) => <Button onClick={props.toggleDialog} style={{backgroundColor: "#1983FF", color: "#fff"}}><Typography variant="h5">+</Typography></Button>;

export default globalButton;