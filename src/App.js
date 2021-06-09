import {Grid, Card, Typography} from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import MenuBar from './components/MenuBar';
import TasksList from './components/TasksList';
import AddTasksDialog from './dialogs/AddTasksDialog';

function App() {
  return (
    <Grid container justify="center">
    <AddTasksDialog></AddTasksDialog>
      <Card style={{width:400}}>
        <Grid container direction={'column'}>
          <Grid item style={{flexGrow:1}}>
            <MenuBar/>
          </Grid>
          <Grid item>
            <TasksList/>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default App;
