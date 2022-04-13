import { Button, Card, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Banner = () => {
  return (
    <Grid container justifyContent="center" sx={{ mt: 10, mb: 10 }}>
      <Grid item xs={10} sm={10} md={4.5} lg={4.5} xl={4.5} sx={{ mb: 10 }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
          The Financial Layer for Real Estate on Web3
        </Typography>
        <Typography variant="subtitle1" component="div">
          Buy, sell, and split your real estate easily.
        </Typography>
        <Typography variant="subtitle1" component="div">
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; DAO LLC managed
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; NFT-based ownership interests
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <CheckCircleIcon /> &nbsp;&nbsp; DeFi compatible
          </Typography>
        </Typography>
      </Grid>
      <Grid xs={10} sm={10} md={4} item lg={4} xl={4} sx={{ mb: 10 }}>
        {/* <Typography
          sx={{
            backgroundColor: '#000',
            width: 100,
            height: 90,
            borderRadius: 5,

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HomeIcon sx={{ color: '#fff', fontSize: 50 }} />
        </Typography> */}
        <Card
          sx={{
            border: 'none',
            borderRadius: 0,
            backgroundColor: '#fff',
            py: 5,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 600, textAlign: 'center', mt: 3 }}
          >
            Join the community
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'center', mt: 1 }}
          >
            Say hi and know when we go live.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: '90%',
              marginLeft: '5%',
              mt: 3,
              height: 50,
              backgroundColor: '#4f46e5',
            }}
          >
            Connect on Discord
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Banner;
