import React from 'react';
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
  main: {
    maxWidth: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    marginBottom: 100,
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  heading: {
    fontSize: 18,
    fontWeight: 600,
  },
  ul: {
    listStyle: 'none',
    marginTop: 10,
    marginBottom: 10,
  },
  li: {
    padding: '10px 0',
    fontSize: 14,
  },
  input: {
    marginTop: 10,
    height: 50,
    width: 150,
    border: '1px solid #d6d6d6',
    fontSize: 14,
    paddingLeft: 5,
  },
  btn: {
    cursor: 'pointer',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    height: 50,
    padding: '0 10px',
  },
  secondFooter: {
    padding: 20,
    textAlign: 'center',
    color: '#666666',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <hr
        style={{ height: '1px', backgroundColor: '#837575', border: 'none' }}
      />
      <div className={classes.secondFooter}>
        <div>Copyright &copy; 2022 Bonfire</div>
      </div>
    </>
  );
};

export default Footer;
