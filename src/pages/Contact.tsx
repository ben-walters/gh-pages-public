import {Box, Link, Stack, Typography} from "@mui/material";
import {pageStyles} from "../style/pageStyles";
import {stackSpacing} from "../constants";

function ContactPage({id}: {id: string}) {
  return (
    <Box id={id} sx={pageStyles} className="portfolio-section">
      <Stack spacing={stackSpacing} direction={"column"}>
        <Typography variant="h2">Get in touch</Typography>
        <Typography variant="body1">
          Ping me an email at{" "}
          <Link
            href="mailto:awesomeshinythings@proton.me?subject=I%20got%20this%20from%20your%20website"
            target="_blank"
            rel="noopener noreferrer"
          >
            awesomeshinythings@proton.me
          </Link>
          .
        </Typography>
      </Stack>
    </Box>
  );
}

export default ContactPage;
