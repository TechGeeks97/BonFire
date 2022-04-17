import { Grid, Typography } from '@mui/material';
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
  heading: {
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 15,
    [theme.breakpoints.down('md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
    },
  },
}));

const Foundations = () => {
  const classes = useStyles();
  return (
    <>
      <hr
        style={{ height: '1px', backgroundColor: '#837575', border: 'none' }}
      />
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{ mt: 10, mb: 30 }}
      >
        <Grid item lg={10} sx={{ mb: 10 }}>
          <h1
            className="main-heading text-center"
            style={{ textAlign: 'center' }}
          >
            Web 3.0 for real estate investing
          </h1>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontSize: 22,
              width: '80%',
              marginLeft: '10%',
              textAlign: 'center',
              mt: 4,
            }}
          >
            Bonfire facilitates real estate transactions in a seamless,
            permissionless, and secure way
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Ease
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18, mb: 3 }}>
            Transforming transactions that used to take 30 days into 30 seconds
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Liquidity
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18, mb: 3 }}>
            The blockchain never sleeps and can facilitate decentralized
            transactions 24/7/365
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={3} lg={2.2}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
          >
            Security
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: 18 }}>
            Our technology is immutable and your investment is always protected
            and secure
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Foundations;
