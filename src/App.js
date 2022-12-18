import React, { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import "./App.css";
import "./fonts/Montserrat.ttf";
import Home from "./pages/Home";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => setColorScheme(value);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme,
          globalStyles: (theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors["light-brown"][7]
                  : theme.colors["light-beige"][3],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][1]
                  : theme.colors["light-brown"][10],
            },
            ".content": {},
            ".toggle-mode": {
              marginLeft: "20px",
              marginRight: "20px",
              marginTop: "20px",
              lineHeight: "0px",
            },
            ".toggle-mode-btn": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][1]
                  : theme.colors["light-brown"][10],
              ":hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors["light-brown"][7]
                    : theme.colors["light-beige"][3],
              },
            },
            ".landing": {
              height: "100vh",
              width: "100%",
            },
            ".header": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors["light-brown"][7]
                  : theme.colors["light-beige"][3],
              borderBottom: "none",
              marginBottom: "100px",
            },
            ".icon-btn": {
              ":hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors["light-brown"][7]
                    : theme.colors["light-beige"][3],
              },
            },
            ".icon-btn-child": {
              ":hover": {
                stroke:
                  theme.colorScheme === "dark"
                    ? theme.colors["light-beige"][3]
                    : theme.colors["light-brown"][7],
              },
            },
            ".burger": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors["light-beige"][3]
                  : theme.colors["light-brown"][7],
            },
            ".nav-btn": {
              ":hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors["light-brown"][7]
                    : theme.colors["light-beige"][3],
                color:
                  theme.colorScheme === "dark"
                    ? theme.colors["dark-burgundy"][7]
                    : theme.colors["dark-brown"][8],
              },
            },
            ".sec-heading": {
              marginTop: "150px",
              lineHeight: 0,
            },
            ".about-h1": {
              fontSize: "10rem",
              opacity: 0.3,
              lineHeight: 0,
            },
            ".about-h6": {
              fontSize: "3rem",
              fontWeight: 800,
            },
            ".projects-h1": {
              fontSize: "10rem",
              opacity: 0.3,
            },
            ".trans-image": {
              backgroundColor: "white",
            },
          }),
          components: {
            Navbar: {
              styles: (theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors["light-brown"][7]
                      : theme.colors["light-beige"][3],
                },
              }),
            },
            Card: {
              styles: (theme) => ({
                root: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors["light-beige"][3]
                      : theme.colors["light-brown"][2],
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors["dark-brown"][9]
                      : "white",
                },
              }),
            },
          },
          fontFamily: "Montserrat",
          colors: {
            "dark-burgundy": [
              "#8E6867",
              "#855A59",
              "#7E4D4C",
              "#78413F",
              "#743533",
              "#712927",
              "#6F1D1B",
              "#5C2120",
              "#4E2322",
              "#422323",
              "#392322",
              "#312121",
              "#2B1F1F",
            ],
            "light-beige": [
              "#F4F3F1",
              "#E1DED8",
              "#D2CBBF",
              "#C6BAA7",
              "#BEAB8E",
              "#BA9E73",
              "#BB9457",
              "#A58452",
              "#8D7651",
              "#7A694E",
              "#695D4A",
              "#5C5346",
              "#514B41",
            ],
            "dark-brown": [
              "#5B4E47",
              "#55463E",
              "#503F36",
              "#4B392E",
              "#483326",
              "#452D1F",
              "#432818",
              "#382519",
              "#30221A",
              "#291F19",
              "#241C18",
              "#1F1A17",
              "#1B1715",
            ],
            "light-brown": [
              "#B9ABA0",
              "#AF9A8B",
              "#A98A75",
              "#A67C5D",
              "#A16F4B",
              "#9C633A",
              "#99582A",
              "#805130",
              "#6C4A32",
              "#5C4432",
              "#4F3D31",
              "#44382F",
              "#3C322C",
            ],
            tan: [
              "#F1ECE5",
              "#E6D9C5",
              "#E0C9A4",
              "#E1BB80",
              "#CEA96F",
              "#BB9963",
              "#A98959",
              "#917A56",
              "#7D6D53",
              "#6D614F",
            ],
          },
          primaryColor: "light-brown",
          primaryShade: 7,
        }}
      >
        <Home />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
