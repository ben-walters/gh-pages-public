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
          I specialize in building scalable, service-centric architectures using
          technologies like JWT-authenticated REST APIs, gRPC, and GraphQL. Over
          the years, I've worked on a wide range of applications, designed
          robust CI/CD pipelines with tools like GitLab CI, CircleCI, and GitHub
          Actions, and built reliable, platform-agnostic systems on AWS and
          Google Cloud.
        </Typography>
        <Typography variant="body1">
          Observability is a big part of my workflow—tools like Elasticsearch,
          Kibana, and Prometheus help me gather telemetry, ship logs, and set up
          real-time monitoring to ensure systems run smoothly and reliably.
        </Typography>
        <Typography variant="body1">
          I'm all about using the right tool for the job. I've worked with
          messaging systems like RabbitMQ, Redis, Kafka, and SQS; databases like
          PostgreSQL, MySQL, MongoDB, and DynamoDB; and infrastructure-as-code
          tools like Kubernetes, Helm, and Ansible. I also have experience with
          caching solutions like Redis and Memcached to optimize performance.
        </Typography>
        <Typography variant="body1">
          On the frontend, I've built applications with React, Next.js, Vite,
          and even dabbled in Angular. I've also integrated third-party APIs
          like Stripe, PayPal, Twilio, and Google APIs to create seamless user
          experiences. My goal is always the same: to build software that's
          functional, scalable, and solves real problems.
        </Typography>
        <Typography variant="body1">
          I'm passionate about learning and constantly expanding my skill set.
          Right now, I'm diving into Rust and loving the challenge of exploring
          a new language. I thrive in environments where I'm encouraged to
          tackle new problems, experiment with different technologies, and push
          the boundaries of what I know. For me, every project is an opportunity
          to grow and bring fresh ideas to the table.
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
