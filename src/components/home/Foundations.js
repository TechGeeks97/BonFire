import { Grid, Typography } from '@mui/material';

const Foundations = () => {
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
          }}
        >
          Web3 Foundations
        </Typography>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mt: 3 }}>
          New foundations for real estate finance
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontSize: 20, textAlign: 'center', mt: 2 }}
        >
          The DwellFi protocol is the core infrastructure for today and
          tomorrow’s real estate financial products. Build whatever you want
          with straightforward owner management and lightning fast transaction
          settlement.
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          DAO LLCs
        </Typography>
        <Typography sx={{ textAlign: 'justify', fontSize: 18 }}>
          All real estate is put into a DAO LLC structure with one to many
          owners and a clean title history.
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          Instant Tx
        </Typography>
        <Typography sx={{ textAlign: 'justify', fontSize: 18 }}>
          Each ownership interest in a property can be sold instantly on a
          permissionless network.
        </Typography>
      </Grid>
      <Grid item xs={8} sm={8} md={3} lg={2.5}>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
        >
          DeFi Utility
        </Typography>
        <Typography sx={{ textAlign: 'justify', fontSize: 18 }}>
          Being DeFi native, completely new financial products can be built for
          real estate finance.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Foundations;
