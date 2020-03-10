import React from "react";
import { useSelector } from "react-redux";
import { howManyResources } from "../store/resources/selectors";

export default function Resources() {
  const resourcesCount = useSelector(howManyResources);
  //console.log("hi", resourcesCount);
  return (
    <div>
      <h1>{resourcesCount} resources</h1>
    </div>
  );
}
