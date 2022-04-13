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
    <Grid container justifyContent="center" spacing={3} sx={{ mt: 10, mb: 20 }}>
      <Grid item lg={10} sx={{ mb: 10 }}>
        <Typography
          sx={{
            backgroundColor: '#000',
            px: 2,
            borderRadius: 10,
            color: '#fff',
            width: 'fit-content',
            margin: 'auto',
            mt: 2,
            mb: 4,
          }}
        >
          Web 3.0 for real estate investing
        </Typography>
        <Typography variant="h2" component="h1" className={classes.heading}>
          New foundations for real estate finance
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontSize: 20, textAlign: 'center', mt: 2 }}
        >
          Bonfire is a platform that will facilitate the decentralized real
          estate transactions in a seamless, permissionless, easy, and liquid
          manner
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          Ease
        </Typography>
        <Typography sx={{ textAlign: 'justify', fontSize: 18 }}>
          Transforming transactions that used to take 30 days into 30 seconds
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          Liquidity
        </Typography>
        <Typography sx={{ textAlign: 'left', fontSize: 18 }}>
          A global network of buyers and sellers
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          Control
        </Typography>
        <Typography sx={{ textAlign: 'left', fontSize: 18 }}>
          Access to top properties# in the markets with highest potential
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          Availability
        </Typography>
        <Typography sx={{ textAlign: 'left', fontSize: 18 }}>
          The blockchain never sleeps and can facilitate decentralized
          transactions 24/7/365
        </Typography>
      </Grid>
      <Typography sx={{ textAlign: 'left', fontSize: 14, mt: 5 }}>
        AI driven models crunching 1000+ data points to predict annualized
        returns # Selection based on neighborhood, schools, parks, and community
      </Typography>
    </Grid>
  );
};

export default Foundations;
