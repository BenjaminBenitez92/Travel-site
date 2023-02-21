/* eslint-disable react/prop-types */
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { handleFlightSegment } from "../store";
import Panel from "./Panel";
const FlightList = () => {
  const dispatch = useDispatch();

  const { airline, tripSummary, flightSegment } = useSelector((state) => {
    return {
      airline:
        state.flights.data.getAirFlightRoundTrip.results.air_search_rsp.airline,
      tripSummary:
        state.flights.data.getAirFlightRoundTrip.results.air_search_rsp.segment,
      flightSegment: 
      state.flights.flightSegment,
    };
  });

  for (let prop in tripSummary) {
    let segment = tripSummary[prop];
    if (flightSegment.length < 1) {
      dispatch(handleFlightSegment(segment));
    }
  }

  let renderAirline = flightSegment.map((data, index) => {
    const airlineMap = airline.map((info) => {
      return info;
    });
    let airLineInfo;
    let logo;
    for (let prop in airlineMap) {
      if (airlineMap[prop].code === data.marketing_airline) {
        airLineInfo = airlineMap[prop].name;
        logo = airlineMap[prop].logo;
      }
    }

    return (
      <Panel key={index}>
        <img src={logo} alt="" />
        {airLineInfo}
      </Panel>
    );
  });

  return <div>{renderAirline}</div>;
};

export default FlightList;
