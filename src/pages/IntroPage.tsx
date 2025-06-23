import {Box, Stack, Typography} from "@mui/material";
import {pageStyles} from "../style/pageStyles";
import {stackSpacing} from "../constants";

function IntroPage({id}: {id: string}) {
  return (
    <Box id={id} sx={pageStyles} className="portfolio-section">
      <Stack spacing={stackSpacing} direction={"column"}>
        <Typography variant="h2">Hey, I'm Ben</Typography>
        <Typography variant="h4">
          Day to day, I'm a Typescript developer, but my heart belongs to
          Devops.
        </Typography>
        <Typography variant="body1">
          I specialise in taking your ideas, and going big... but most
          importantly, I really love building cool shit.
        </Typography>
      </Stack>
    </Box>
  );
}

export default IntroPage;
