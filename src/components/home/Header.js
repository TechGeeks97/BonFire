import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/system';

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

const useStyles = makeStyles(() => ({
  logo: {
    fontSize: 30,
    fontWeight: 900,
    height: '46px'
  },
  logoimg: {
    height: '46px'
  },
  list: {
    fontSize: 18,
    fontWeight: 500,
    cursor: 'pointer',
    ['&:hover']: {
      textDecoration: 'underline',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  btn: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    fontSize: 14,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="space-around" sx={{ py: 2 }}>
      <Grid item>
        <div className={classes.logo}><img className={classes.logoimg} src="android-chrome-192x192.png"></img></div>
      </Grid>
      <Grid item>
        <div className={classes.middle}>

        </div>
      </Grid>
      <Grid item>
      </Grid>
    </Grid>
  );
};

export default Header;
