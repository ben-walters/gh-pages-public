import {Box, List, ListItem, Stack, Typography} from "@mui/material";
import {pageStyles} from "../style/pageStyles";
import {stackSpacing} from "../constants";

function SkillsPage({id}: {id: string}) {
  return (
    <Box id={id} sx={pageStyles} className="portfolio-section">
      <Stack spacing={stackSpacing} direction={"column"}>
        <Typography variant="h2">Skills &amp; Principles</Typography>
        <Typography variant="h4">
          I daily-drive Typescript, but have experience with Lua, Go, Python and
          PHP. As for Devops, I'm a big fan of Kubernetes.
        </Typography>
        <Typography variant="body1">
          When it comes to software design, I tend to lean toward building
          service-centric architectures that are scalable, reliable, testable,
          and easy to maintain. For inter-service communication, I usually go
          with JWT-authenticated REST APIs or gRPC, depending on what makes the
          most sense for the project. Over the years, I've worked on all kinds
          of applications—big and small—designed flexible CI/CD pipelines, and
          built highly available, platform-agnostic application stacks that
          work.
        </Typography>
        <Typography variant="body1">
          Observability is a big deal for me. I'm all about gathering telemetry,
          shipping logs, and setting up real-time notifications and monitoring.
          These things aren't just nice to have—they're essential for making
          sure everything runs smoothly and giving the team (and the business)
          peace of mind that any system is doing what it's supposed to.
        </Typography>
        <Typography variant="body1">
          I'm a big believer in using the right tool for the job. Instead of
          trying to force a solution into a specific stack, I like to keep my
          options open and use whatever works best. That's why I've worked with
          a wide range of tools and technologies—messaging systems like
          RabbitMQ, Redis, SQS, and SNS; databases like PostgreSQL, MongoDB, and
          DynamoDB; and infrastructure-as-code tools like Ansible, Kubernetes,
          and Helm. Having this flexibility means I can adapt to whatever the
          project needs.
        </Typography>
        <Typography variant="body1">
          On top of that, I'm passionate about building systems that are not
          just functional but also easy to use and maintain. Whether it's
          integrating third-party APIs like Stripe, PayPal, or Twilio, or
          working with modern frontend frameworks like React, Next.js, or Vite,
          I always aim to create seamless, user-friendly experiences backed by
          solid engineering.
        </Typography>
        <Typography variant="body1">
          At the end of the day, my goal is simple: to build software that
          solves real problems, scales effortlessly, and helps businesses
          succeed. With a strong mix of backend, frontend, and cloud expertise
          (AWS, GCP, and more), I try to bring a well-rounded perspective to
          every project I take on.
        </Typography>
        <Typography variant="body1">
          <List>
            <ListItem sx={{padding: 0, margin: 0}}>
              Know what you know, and know what you don't know.
            </ListItem>
            <ListItem sx={{padding: 0, margin: 0}}>
              You can teach a person to code, but you can't teach them not to be
              a dick
            </ListItem>
            <ListItem sx={{padding: 0, margin: 0}}>
              {" "}
              Stong opinons, loosely held.
            </ListItem>
            <ListItem sx={{padding: 0, margin: 0}}>
              {" "}
              Write code for someone else to read.
            </ListItem>
          </List>
        </Typography>
      </Stack>
    </Box>
  );
}

export default SkillsPage;
