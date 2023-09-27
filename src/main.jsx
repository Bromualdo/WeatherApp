import React from "react";
import ReactDOM from "react-dom/client";
import { Appclima } from "./Appclima.jsx";
import "./index.css"
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
    <ChakraProvider>
      <Appclima />
    </ChakraProvider>
    </AnimatePresence>
  </React.StrictMode>
);
