import React from 'react';
import { Grid } from '@material-ui/core/';
import Headers from "./Headers";
import Content from "./Content";
import FloatBtn from './FloatBtn';
import Fab from '@material-ui/core/Fab';


const App = () => {
    return (
      <dvi>
      
        <Grid classname="mainGrid" container direction="column">
          <Grid item > 
            <Headers />
          </Grid>
          <Grid item  alignItems="center">
            <Grid container >
              <Content /> 
          </Grid>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <FloatBtn />
    </dvi>
    
    );
}

export default App;
