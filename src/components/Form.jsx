import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "./Panel";
import {
  departureDate,
  locDeparture,
  locArrival,
  handleLocEnd,
  handleLocStart,
  handleNumOfAdults,
  handleitineraryType,
  flightsData,
  handleClassType,
  classTypes,
  useFetchRoundTripFlightsQuery,
} from "../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlightList from "./FlightList";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [skip, setSkip] = useState(true);
  const dispatch = useDispatch();
  const { flightsInput, flightList } = useSelector((state) => {
    return {
      flightsInput: state.flights.input,
      flightList: state.flights.data,
    };
  });

  const { data, error, isSuccess, isFetching } = useFetchRoundTripFlightsQuery(
    flightsInput,
    {
      skip,
    }
  );

  useEffect(() => {
    dispatch(flightsData(data));
  }, [data]);

  const { departure, arrival, passangers, classType } = useSelector((state) => {
    return {
      departure: state.form.locStart,
      arrival: state.form.locEnd,
      passangers: state.form.adults,
      classType: state.form.classType,
    };
  });

  const handleOnChangeDeparture = (e) => {
    dispatch(handleLocStart(e.target.value));
  };
  const handleOnChangeArrival = (e) => {
    dispatch(handleLocEnd(e.target.value));
  };
  const handleOnClick = (e) => {
    dispatch(handleitineraryType(e.target.value));
  };
  const handleOnChangePassangers = (e) => {
    dispatch(handleNumOfAdults(e.target.value));
  };
  const handleSelectClick = (e) => {
    dispatch(handleClassType(e.target.value));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formatDepartureDate = startDate.toISOString().split("T")[0];
    let formatReturnDate = endDate.toISOString().split("T")[0];
    let joinedDate = formatDepartureDate.concat(" ", ",", formatReturnDate);
    let joinLoc = departure.concat(",", arrival);

    setSkip(false);

    dispatch(locDeparture(joinLoc));
    dispatch(locArrival(joinLoc));
    dispatch(departureDate(joinedDate));

    dispatch(classTypes(classType));
  };

  let content;
  if (isFetching) {
    content = <div> Loading....</div>;
  } else if (error) {
    content = <div> there was an errorr...</div>;
  } else {
    content = flightList && <FlightList isSuccess={isSuccess} />;
  }

  return (
    <div>
      <Panel className="w-1/2 h-1/3">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row flex-wrap ">
            <div className="mr-10">
              <label>
                <input
                  onClick={handleOnClick}
                  type="radio"
                  value="ROUND_TRIP"
                />
                Round Trip
              </label>
            </div>
            <div className="ml-10">
              <label>
                <input onClick={handleOnClick} type="radio" value="ONE_WAY" />
                One-Way
              </label>
            </div>
          </div>
          <div className="flex flex-row ">
            <div>
              <input
                type="text"
                placeholder="Departing From?"
                value={departure}
                onChange={handleOnChangeDeparture}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Going To?"
                value={arrival}
                onChange={handleOnChangeArrival}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-row">
              <label>
                Departing?
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </label>
              <label>
                Returning?
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              <input
                value={passangers}
                className="mt-2"
                type="number"
                placeholder="Amount of Passargers"
                onChange={handleOnChangePassangers}
              />
            </div>
            <div>
              <select onClick={handleSelectClick}>
                <option value="economy">Economy</option>
                <option value="premium">Premium Economy</option>
                <option value="business">Business</option>
                <option value="first">First</option>
              </select>
            </div>
          </div>
          <button onClick={handleSubmit}>sub</button>
        </form>
      </Panel>
      {content}
    </div>
  );
};

export default Form;
