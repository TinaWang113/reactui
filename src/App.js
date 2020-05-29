import React from 'react';
import { Grid } from '@material-ui/core/';
import Headers from "./Headers";
import Content from "./Content";



const App = () => {
    return (
     <Grid container spacing={3} direction="column">
      <Grid item > 
        <Headers />
      </Grid>
      <Grid container justify="center" > 
       <Grid item xs={false} sm={2}/>
       <Grid item xs={12} sm={8}>
         <Content />
       </Grid>
       <Grid item xs={false} sm={2}>
       </Grid>
      </Grid>
     </Grid>
    );
}

export default App;
