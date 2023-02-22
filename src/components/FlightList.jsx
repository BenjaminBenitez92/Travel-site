/* eslint-disable react/prop-types */
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  handleFlightSegment,
  handleDepartInfo,
  handleArrvailInfo,
  handlePricedItinerary,
} from "../store";
import Panel from "./Panel";
const FlightList = () => {
  const dispatch = useDispatch();

  const {
    airline,
    tripSegment,
    flightSegment,
    departTime,
    arrivalTime,
    pricedItinerary,
    priceInfo,
  } = useSelector((state) => {
    return {
      airline:
        state.flights.data.getAirFlightRoundTrip.results.air_search_rsp.airline,
      tripSegment:
        state.flights.data.getAirFlightRoundTrip.results.air_search_rsp.segment,
      pricedItinerary:
        state.flights.data.getAirFlightRoundTrip.results.air_search_rsp
          .priced_itinerary,
      flightSegment: state.flights.flightSegment,
      departTime: state.flights.departDateInfo.time,
      arrivalTime: state.flights.arrivalDateInfo.time,
      priceInfo: state.flights.pricedItinerary,
    };
  });
  console.log(pricedItinerary)
  for (let prop in tripSegment) {
    let segment = tripSegment[prop];
    if (flightSegment.length < 1) {
      dispatch(handleFlightSegment(segment));
    }
  }
  for (let prop in pricedItinerary) {
    let price = pricedItinerary[prop];
    if (priceInfo.length < 1) {
      dispatch(handlePricedItinerary(price));
    }
  }
  let renderAirline = flightSegment.map((data, index) => {
    const airlineMap = airline.map((info) => {
      return info;
    });
    const priceMap = priceInfo.map((cost) => {
      return cost;
    });
    let totalCost;

    for (let prop in priceMap) {
      if (
        priceMap[prop].pricing_info.ticketing_airline === data.marketing_airline
      ) {
        totalCost = priceMap[prop].pricing_info.display_total_fare;
      }
    }

    let airLineInfo;
    let logo;

    for (let prop in airlineMap) {
      if (airlineMap[prop].code === data.marketing_airline) {
        airLineInfo = airlineMap[prop].name;
        logo = airlineMap[prop].logo;
      }
    }

    if (departTime.length < 1) {
      dispatch(handleDepartInfo(flightSegment[index].depart_date_time));
      dispatch(handleArrvailInfo(flightSegment[index].arrival_date_time));
    }

    return (
      <Panel key={data.unique_seg_id}>
        <img src={logo} alt="" />
        {departTime[index]}
        {totalCost}
        {airLineInfo}
        {arrivalTime[index]}
        {data.dest_airport}
        {data.orig_airport}
      </Panel>
    );
  });

  return <div>{renderAirline}</div>;
};

export default FlightList;
