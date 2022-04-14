import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  logo: {
    fontSize: 30,
    fontWeight: 900,
    height: '46px',
  },
  logoimg: {
    height: '46px',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-around" sx={{ py: 2 }}>
      <Grid item>
        <div className={classes.logo}>
          <img
            className={classes.logoimg}
            src="android-chrome-192x192.png"
            alt=""
          />
        </div>
      </Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Header;
