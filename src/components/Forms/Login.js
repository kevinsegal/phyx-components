import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function LoginForm() {
  return (
    <React.Fragment>
      <Typography variant="title" align="left" gutterBottom>
        Login Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="userEmail" label="Email" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="userPassword" label="Password" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default LoginForm;
