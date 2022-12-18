import React from "react";
import {
  Box,
  Title,
  Center,
  Header,
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
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconSun,
  IconMoonStars,
} from "@tabler/icons";
import profile from "../images/profile.jpg";
import tuneIn from "../images/tune-in.png";
import dotsAndBoxes from "../images/dots-and-boxes.png";
import youtube from "../images/youtube.jpeg";
import relectric from "../images/relectric.png";
import rezellers from "../images/rezellers.jpg";
import SideBar from "../components/SideBar";

const Home = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <>
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
        <Group position='center' className='landing'>
          <Container>
            <Title fz='90px'>Hi,</Title>
            <Title fz='80px'>I'm Thomas Kahessay,</Title>
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
              <ActionIcon size={40} className='icon-btn'>
                <IconMail size={40} color='black' className='icon-btn-child' />
              </ActionIcon>
            </Group>
          </Container>
          <Container>
            <Image src={profile} width={400} height={400} radius='xl'></Image>
          </Container>
        </Group>
        <Group position='center' className='about'>
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
                Currently I am a software engineering student, studying at the
                University of Calgary. I have previously interned as a Software
                Developer at IBM, with experience in full stack development. My
                interests include entrepreneurship, software development, and
                innovation for the advancement of society. Some of my other
                interests include soccer, sneakers/fashion and music. I am
                always looking for new and fun opportunities to learn and grow.
              </Text>
            </Container>
          </Container>
        </Group>
        <Group position='center' className='projects'>
          <Container className='sec-heading' ta='center'>
            <Title className='projects-h1'>Projects</Title>
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
                <Image src={tuneIn} height={160} />
              </Card.Section>
              <Group position='apart' mt='md' mb='xs'>
                <Title order={4}>TuneIn</Title>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
              </Group>
              <Text>
                Music sharing application created with Matine, React.js,
                Node.js, and MongoDB. Share your song of the day, anywhere at
                anytime. Uses the Spotify API to search and hear previews of all
                your favourite songs before posting.
              </Text>
              <Button fullWidth mt='md' radius='md'>
                View Project
              </Button>
            </Card>
            <Card>
              <Card.Section>
                <Image src={dotsAndBoxes} height={160} />
              </Card.Section>
              <Group position='apart' mt='md' mb='xs'>
                <Title order={4}>Dots and Boxes</Title>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
              </Group>
              <Text>
                Dots and Boxes game created using React.js, Node.js and Express.
                Three player game where players take turns drawing lines on a
                board to complete squares. The player who completes the most
                squares wins the game.
              </Text>
              <Button color='brown' fullWidth mt='md' radius='md'>
                View Project
              </Button>
            </Card>
            <Card>
              <Card.Section>
                <Image src={youtube} height={160} />
              </Card.Section>
              <Group position='apart' mt='md' mb='xs'>
                <Title order={4}>Youtube Sentiment Analysis</Title>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
              </Group>
              <Text>
                Sentiment analysis of Youtube comments using PySpark and the
                VADER library to determine the sentiment of a comment and
                attempt to predict the number of dislikes a video will receive
                with linear regression.
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
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
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
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
              </Group>
              <Text>
                Created an inventory tracking platform for sellers to track the
                status of their inventory, customers, and profit. Django was
                used for the back-end to create a REST API and React was used
                for the front-end, with Material UI.
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
                <Image src={profile} height={160} />
              </Card.Section>
              <Group position='apart' mt='md' mb='xs'>
                <Title order={4}>Project</Title>
                <Badge color='brown' variant={dark ? "filled" : "light"}>
                  Completed
                </Badge>
              </Group>
              <Text>
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
              <Button color='brown' fullWidth mt='md' radius='md'>
                View Project
              </Button>
            </Card>
          </SimpleGrid>
        </Group>
      </Box>
    </>
  );
};

export default Home;
