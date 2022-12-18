import React, { useState } from "react";
import { Burger, Drawer, Container, Navbar, Button } from "@mantine/core";
import {
  IconUser,
  IconDeviceLaptop,
  IconTools,
  IconSubtask,
  IconAddressBook,
} from "@tabler/icons";

const SideBar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  return (
    <>
      <Burger
        onClick={() => {
          setDrawerOpened(!drawerOpened);
        }}
        className='burger'
      />
      <Drawer
        opened={drawerOpened}
        withCloseButton={false}
        onClose={() => setDrawerOpened(!drawerOpened)}
      >
        <Navbar>
          <Navbar.Section grow mt='lg'>
            <Button
              variant='subtle'
              leftIcon={<IconUser size={50} />}
              size='xl'
              onClick={() => {}}
              fullWidth
              className='nav-btn'
            >
              About
            </Button>
          </Navbar.Section>
          <Navbar.Section grow mt='lg'>
            <Button
              variant='subtle'
              leftIcon={<IconDeviceLaptop size={50} />}
              size='xl'
              onClick={() => {}}
              fullWidth
              className='nav-btn'
            >
              Projects
            </Button>
          </Navbar.Section>
          <Navbar.Section grow mt='lg'>
            <Button
              variant='subtle'
              leftIcon={<IconTools size={50} />}
              size='xl'
              onClick={() => {}}
              fullWidth
              className='nav-btn'
            >
              Skills
            </Button>
          </Navbar.Section>
          <Navbar.Section grow mt='lg'>
            <Button
              variant='subtle'
              leftIcon={<IconSubtask size={50} />}
              size='xl'
              onClick={() => {}}
              fullWidth
              className='nav-btn'
            >
              Experience
            </Button>
          </Navbar.Section>
          <Navbar.Section grow mt='lg'>
            <Button
              variant='subtle'
              leftIcon={<IconAddressBook size={50} />}
              size='xl'
              onClick={() => {}}
              fullWidth
              className='nav-btn'
            >
              Contact
            </Button>
          </Navbar.Section>
        </Navbar>
      </Drawer>
    </>
  );
};

export default SideBar;
