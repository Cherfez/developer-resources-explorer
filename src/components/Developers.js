import React from "react";
import { useSelector } from "react-redux";
import { howManyDevelopers } from "../store/developers/selectors";

export default function Developers() {
  const developerCount = useSelector(howManyDevelopers);
  //console.log("hi", developerCount);
  return (
    <div>
      <h1>{developerCount} developers</h1>
    </div>
  );
}
