import React, { useContext, useEffect } from "react";
import { Mycontext } from "./Context";

export default function Form() {
  const theme = useContext(Mycontext);

  useEffect(() => {
    console.log(theme);
  });

  return (
    <form action="#">
      <h1>title</h1>
      <input type="text" name="username" id="user" />
      <input type="text" name="password" id="pass" />
      <input type="button" value="" />
    </form>
  );
}
