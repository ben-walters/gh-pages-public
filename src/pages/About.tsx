import {Box, Link, Stack, Typography} from "@mui/material";
import {pageStyles} from "../style/pageStyles";
import {stackSpacing} from "../constants";

function AboutPage({id}: {id: string}) {
  return (
    <Box id={id} sx={pageStyles}>
      <Stack spacing={stackSpacing} direction={"column"}>
        <Typography variant="h1">What's up?</Typography>
        <Typography variant="h3">
          I've been writing code since I was a kid... breaking small corners of
          the internet for over 23 years.
        </Typography>
        <Typography variant="body1">
          I've always had a passion for coding. I started hacking around MySpace
          pages back in the day, moved onto slightly more nefarious pastures for
          a few years, writing Soldier of Fortune 2{" "}
          <em>(incredible game, btw)</em> explioits and modding Unreal, before
          landing my first PHP gig when I was 18.
        </Typography>

        <Typography variant="body1">
          Since then, I've turned my hand to whatever is required of me. I spent
          the majority of my career in digital agencies in Shoreditch like{" "}
          <Link
            href="https://www.squiz.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Squiz
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.deptagency.com/en-uki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FEED London - acquired by DEPT
          </Link>
          , and Startups like{" "}
          <Link
            href="https://www.klarna.com/international/enterprise/marketing-solutions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HERO - acquired by Klarna
          </Link>
          ,{" "}
          <Link
            href="https://www.veratrak.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veratrak
          </Link>
          , and{" "}
          <Link
            href="https://velocity.black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Velocity
          </Link>
          . For the last 10 years I've been contracting, mostly for startups, in
          the Pharmaceutical, Blockchain, Social media, and Financial sectors,
          primarily working with Typescript, and a good dose of Devops.
        </Typography>
        <Typography variant="body1">
          In my career I've worked in every industry imaginable, from Gambling
          to Government, building websites and backend systems for{" "}
          <Link
            href="https://ebay.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            eBay
          </Link>
          ,{" "}
          <Link
            href="https://www.williamhill.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            William Hill
          </Link>
          , many of the UK's leading Universities, and even the{" "}
          <Link
            href="https://www.justice.gov.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Department of Justice
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          In my spare time, I author and contribute to open-source projects, and
          run a (not so active){" "}
          <Link
            href="https://www.youtube.com/@goodjuicewhisky"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </Link>
          .
        </Typography>
      </Stack>
    </Box>
  );
}

export default AboutPage;
