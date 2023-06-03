import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Title,
  Group,
  Container,
  Image,
  Text,
  Space,
  ActionIcon,
  useMantineColorScheme,
  SimpleGrid,
  Card,
  Badge,
  Button,
  Paper,
  Timeline,
  Center,
  List,
  MediaQuery,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconSun,
  IconMoonStars,
  IconCode,
  IconDeviceLaptop,
  IconBrush,
  IconBrandPython,
  IconBrandReact,
} from "@tabler/icons";
import SideBar from "../components/SideBar";
import profile from "../images/profile.jpg";
import bobRoss from "../images/bob-ross.jpeg";
import circleCVI from "../images/circle-logo.png";
import tuneIn from "../images/tune-in.png";
import dotsAndBoxes from "../images/dots-and-boxes.png";
import youtube from "../images/youtube.jpeg";
import relectric from "../images/relectric.png";
import rezellers from "../images/rezellers.jpg";
import school from "../images/school.jpg";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "tween", ease: "anticipate", duration: 1 },
  },
  hidden: { opacity: 0, scale: 0.1 },
};

function Landing() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <Group position='center' className='landing' mb='xl'>
        <Container>
          <Title fz='90px'>Hi,</Title>
          <Title fz='70px'>I'm Thomas Kahessay,</Title>
          <Title fz='60px'>Software Developer &</Title>
          <Title fz='60px'>Student</Title>
          <Space h='lg' />
          <Group>
            <ActionIcon
              size={40}
              className='icon-btn'
              onClick={() =>
                window.open("https://github.com/thomaskahessay", "_blank")
              }
            >
              <IconBrandGithub
                size={40}
                color='black'
                className='icon-btn-child'
              />
            </ActionIcon>
            <ActionIcon
              size={40}
              className='icon-btn'
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/thomaskahessay/",
                  "_blank"
                )
              }
            >
              <IconBrandLinkedin
                size={40}
                color='black'
                className='icon-btn-child'
              />
            </ActionIcon>
          </Group>
        </Container>
        <Container>
          <Image
            src={profile}
            width={370}
            height={370}
            radius='xl'
            className='img-thomas'
          ></Image>
        </Container>
      </Group>
    </motion.div>
  );
}

function About() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <Group position='center' className='about' id='about' mt='xl'>
        <MediaQuery
          query='(max-width: 420px) and (min-width: 200px)'
          styles={{ marginTop: 120 }}
        >
          <Container>
            <Container className='sec-heading' ta='center'>
              <Title className='about-h1'>ABOUT</Title>
              <Title order={6} className='about-h6'>
                MYSELF
              </Title>
            </Container>
            <Space h='lg' />
            <Container ta='center' fw='bold' fz='lg'>
              <Text>
                Currently I am a software engineering new graduate, from the
                University of Calgary. I have previously interned as a Software
                Developer at IBM, with experience in full stack development. My
                interests include entrepreneurship, web development, and the
                intersection of technology and healthcare. Some of my other
                interests include soccer, sneakers/fashion and music. I am
                always looking for new and fun opportunities to learn and grow!
              </Text>
            </Container>
          </Container>
        </MediaQuery>
      </Group>
    </motion.div>
  );
}

function Projects() {
  const { colorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <Group position='center' className='projects' id='projects'>
        <Container className='sec-heading' ta='center'>
          <Title className='section-h1'>Projects</Title>
        </Container>
        <SimpleGrid
          cols={3}
          spacing='lg'
          mr='xl'
          ml='xl'
          breakpoints={[
            { minWidth: 300, cols: 1 },
            { minWidth: 600, cols: 2 },
            { minWidth: 900, cols: 3 },
          ]}
        >
          <Card>
            <Card.Section>
              <Image src={bobRoss} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>Bob Ross Together</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Node.js
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Docker
                </Badge>
              </Group>
            </Group>
            <Text>
              Interactive coloring book application created with MongoDB,
              Express, React, Node.js and Docker containerization. Facilitates
              simultaneous coloring on SVG canvases by multiple users,
              leveraging a distributed architecture to ensure fault tolerance,
              synchronization and consistency.
            </Text>
            <Button
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open(
                  "https://github.com/ychama/CPSC-559-Project",
                  "_blank"
                )
              }
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={circleCVI} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>AVP</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Python
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Django
                </Badge>
              </Group>
            </Group>
            <Text>
              Aggregation and visualization platform allowing health care
              practitioners to view and analyze cardiovascular data. Developed
              with Python, React, Django and TypeScript, facilitating batch
              processing and real-time data visualization of 20+ cardiovascular
              metrics.
            </Text>
            <Button
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open("https://www.circlecvi.com/", "_blank")
              }
            >
              View Project Sponsor
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={tuneIn} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>TuneIn</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Node.js
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  MongoDB
                </Badge>
              </Group>
            </Group>
            <Text>
              Music sharing application created with Matine, React.js, Node.js,
              and MongoDB. Share your song of the day, anywhere at anytime. Uses
              the Spotify API to search and hear previews of all your favourite
              songs before posting.
            </Text>
            <Button
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open("https://github.com/cobereinbold/TuneIn", "_blank")
              }
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={dotsAndBoxes} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>Dots and Boxes</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Node.js
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Express
                </Badge>
              </Group>
            </Group>
            <Text>
              Dots and Boxes game created using React.js, Node.js and Express.
              Three player game where players take turns drawing lines on a
              board to complete squares. The player who completes the most
              squares wins the game.
            </Text>
            <Button
              color='brown'
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open(
                  "https://github.com/thomaskahessay/dots-and-boxes",
                  "_blank"
                )
              }
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={youtube} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>Youtube Sentiment Analysis</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Python
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  PySpark
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  pandas
                </Badge>
              </Group>
            </Group>
            <Text>
              Sentiment analysis of Youtube comments using PySpark and the VADER
              library to determine the sentiment of a comment and attempt to
              predict the number of dislikes a video will receive with linear
              regression.
            </Text>
            <Button
              color='brown'
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open(
                  "https://colab.research.google.com/drive/18uowYAIVZw5JXtTEjJduiJ7N08_k0z6i?usp=sharing",
                  "_blank"
                )
              }
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={relectric} height={160} className='trans-image' />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>Relectric UI Design</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Python
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  JavaScript
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
              </Group>
            </Group>
            <Text>
              Utilized Adobe Suite to design the user interface of an electric
              vehicle's dashboard. This design was then transformed into code
              using PyGame. Worked on the transition from PyGame code into
              React.js for a more responsive UI.
            </Text>
            <Button
              color='brown'
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open(
                  "https://github.com/relectric-car-team/user-interface",
                  "_blank"
                )
              }
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={rezellers} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>ReZellers</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  React
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Python
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Django
                </Badge>
              </Group>
            </Group>
            <Text>
              Created an inventory tracking platform for sellers to track the
              status of their inventory, customers, and profit. Django was used
              for the back-end to create a RESTful API and React was used for
              the front-end, with Material UI.
            </Text>
            <Button
              color='brown'
              fullWidth
              mt='md'
              radius='md'
              onClick={() => {
                window.open("https://github.com/b4yc/reseller-app", "_blank");
              }}
            >
              View Project
            </Button>
          </Card>
          <Card>
            <Card.Section>
              <Image src={school} height={160} />
            </Card.Section>
            <Group position='apart' mt='md' mb='xs'>
              <Title order={4}>Student Registration</Title>
              <Group>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Java
                </Badge>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  MySQL
                </Badge>
              </Group>
            </Group>
            <Text>
              Built a student registration system to maintain student records,
              allowing students to enroll and view courses. The application
              utilized a database using MySQL as well as a client-server
              architecture built with Java.
            </Text>
            <Button
              color='brown'
              fullWidth
              mt='md'
              radius='md'
              onClick={() =>
                window.open(
                  "https://github.com/thomaskahessay/ENSF409-FinalProject",
                  "_blank"
                )
              }
            >
              View Project
            </Button>
          </Card>
        </SimpleGrid>
      </Group>
    </motion.div>
  );
}

function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
      id='skills'
    >
      <Group position='center' className='skills'>
        <Container className='sec-heading' ta='center'>
          <Title className='section-h1'>Skills</Title>
        </Container>
        <SimpleGrid
          cols={4}
          spacing='lg'
          mr='xl'
          ml='xl'
          breakpoints={[
            { minWidth: 300, cols: 1 },
            { minWidth: 600, cols: 2 },
            { minWidth: 900, cols: 3 },
          ]}
        >
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>Front-end Development</Title>
              <IconDeviceLaptop size={18} />
            </Group>
            <Text>
              Previous work in front-end development, using HTML, CSS and
              JavaScript to create responsive and scalable websites.
            </Text>
          </Paper>
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>Full Stack Development</Title>
              <IconDeviceLaptop size={18} />
            </Group>
            <Text>
              Developed multiple full stack applications, using React and Python
              from the ground up.
            </Text>
          </Paper>
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>UI Design</Title>
              <IconBrush size={18} />
            </Group>
            <Text>
              Skilled in using Figma, Adobe XD, and Invision to mockup UI
              designs as well as translate designs to code.
            </Text>
          </Paper>
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>React.js</Title>
              <IconBrandReact size={18} />
            </Group>
            <Text>
              Strong proficiency in web development and a wealth of experience
              utilizing React in various projects.
            </Text>
          </Paper>
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>Python</Title>
              <IconBrandPython size={18} />
            </Group>
            <Text>
              Experienced Python developer, experience with multiple libraries,
              including PySpark, pandas and Django.
            </Text>
          </Paper>
          <Paper shadow='md' p='md' radius='md'>
            <Group spacing='xs'>
              <Title order={4}>Java</Title>
              <IconCode size={18} />
            </Group>
            <Text>
              Strong fundamental skills in Java and object-oriented programming
              with multiple previous projects in Java.
            </Text>
          </Paper>
        </SimpleGrid>
      </Group>
    </motion.div>
  );
}

function Experience() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <Group position='center' id='experience'>
        <Container className='sec-heading' ta='center'>
          <Title className='section-h1' mb='xl'>
            Experience
          </Title>
          <Space h='xl' />
          <Center>
            <Card radius='xl' p='xl'>
              <Timeline active={3} bulletSize={30} lineWidth={5} p='lg'>
                <Timeline.Item title="What's Next?" lineVariant='dashed'>
                  <Text>
                    Always open and looking for new and engaging opportunities!
                  </Text>
                </Timeline.Item>
                <Timeline.Item title='Conclude.ai Operated by IBM (May 2021 - Aug. 2022)'>
                  <List center size='md' spacing='sm' mt='md'>
                    <List.Item>
                      Shaped an incubator project developing a solution to
                      assist sales representatives to stay compliant while
                      pursuing unique engagement offerings with their customers.
                    </List.Item>
                    <List.Item>
                      Transformed the front-end creating more than 5 views and
                      20 components for the web application utilizing
                      TypeScript, SCSS, HTML, React/Redux, and IBM's Carbon
                      Design System.
                    </List.Item>
                    <List.Item>
                      Created 10+ API endpoints using Python, Flask and MongoDB
                      to store, update, and retrieve data required for the
                      application.
                    </List.Item>
                  </List>
                </Timeline.Item>
                <Timeline.Item title='Pathway Signal Management Operated by IBM (Sep. 2021 - Jan. 2022)'>
                  <List center size='md' spacing='sm' mt='md'>
                    <List.Item>
                      Employed data-driven insights to detect unwarranted
                      variation in patient care to improve health care
                      efficiency and reliability.
                    </List.Item>
                    <List.Item>
                      Developed an interactive JavaScript Sankey visualization
                      within a Cognos Analytics report using D3 to depict and
                      overlay 1 ideal and 100’s of sample patients’ lung cancer
                      pathways.
                    </List.Item>
                  </List>
                </Timeline.Item>
                <Timeline.Item title='Relectric (Sep. 2019 - May 2021)'>
                  <List center size='md' spacing='sm' mt='md'>
                    <List.Item>
                      Founding member of the team responsible for converting a
                      gasoline-powered vehicle into an electric vehicle.
                    </List.Item>
                    <List.Item>
                      Conceptualized and developed the infotainment system and
                      dashboard for the vehicle using Python and Adobe XD.
                    </List.Item>
                  </List>
                </Timeline.Item>
              </Timeline>
            </Card>
          </Center>
        </Container>
      </Group>
    </motion.div>
  );
}

function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <Group position='center' id='contact' mb='xl'>
        <Container className='sec-heading' ta='center'>
          <Title className='section-h1' mb='xl'>
            Contact Me
          </Title>
          <Text fz='xl' mb='lg'>
            Want to work together or have any questions?
          </Text>
          <Center>
            <Card radius='md' p='xl'>
              <Button
                size='xl'
                radius='md'
                onClick={() =>
                  (window.location = "mailto:kahessaythomas@gmail.com")
                }
              >
                Say Hello 👋🏾
              </Button>
            </Card>
          </Center>
        </Container>
      </Group>
    </motion.div>
  );
}

const Home = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";

  return (
    <div>
      <Group position='apart' className='toggle-mode'>
        <SideBar />
        <ActionIcon
          variant='subtle'
          onClick={() => {
            let input = dark ? "light" : "dark";
            toggleColorScheme(input);
          }}
          title='Toggle color scheme'
          className='toggle-mode-btn'
        >
          {dark ? <IconSun size={30} /> : <IconMoonStars size={30} />}
        </ActionIcon>
      </Group>
      <Box className='content'>
        <Landing />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Box>
    </div>
  );
};

export default Home;
