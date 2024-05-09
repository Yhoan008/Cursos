import React, { useContext, useEffect } from "react";

import { useScrollerValue } from "./../context/ScrollerProvider";

const styles = {
  container: {
    width: "100%",
    height: "200vh",
    backgroundColor: "red",
  },
};

export default function Context() {
  const context = useScrollerValue();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(context);
    });
  });

  return <div style={styles.container}>{context}</div>;
}
