import React from "react";
import "./style.css"

import Context from "./components/Context";
import ScrollerProvider from "./context/ScrollerProvider";

export default function App() {
  return (
    <ScrollerProvider>
      <Context />
    </ScrollerProvider>
  );
}
