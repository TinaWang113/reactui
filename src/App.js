import React from 'react';
import { Grid } from '@material-ui/core/';
import Headers from "./Headers";

const App = () => {
  
    return (
     <Grid container direction="column">
      <Grid item > 
        <Headers />
      </Grid>
      <Grid container> 

       <Grid xs={12} sm ={8}>
       </Grid>
       <Grid item xs={0} sm={2} />
      </Grid>
     </Grid>
    );
}

export default App;
