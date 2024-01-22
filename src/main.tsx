import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/dm-sans";
import "./index.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

// Amplify

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports.js";

// Router

import { HashRouter } from "react-router-dom";
import RoutingComponent from "./router.tsx";

Amplify.configure(awsconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "DM Sans Variable",
      }}
    >
      <HashRouter>
        <RoutingComponent />
      </HashRouter>
    </MantineProvider>
  </React.StrictMode>
);
