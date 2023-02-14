import React from "react";
import Panel from "./Panel"
import {useFetchFlightsQuery } from "../store"
import { useSelector } from "react-redux";
const FlightList = () => {
  const flightsInput = useSelector((state) => {
    return state.flights.input;
  });
  const {data} = useFetchFlightsQuery(flightsInput)
  const renderList = data.map((flight) =>{
    return( <Panel key={flight.id}>
    <div>
      {flight.airline.name}
    </div>
    </Panel>)
  })
  console.log(renderList)
  return <div>
    {renderList}
  </div>;
};

export default FlightList;
