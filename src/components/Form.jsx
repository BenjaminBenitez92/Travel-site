import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "./Panel";
import {
  departureDate,
  returnDate,
  locDeparture,
  locArrival,
  ininerType,
  handleLocEnd,
  handleLocStart,
  handleNumOfAdults,
  handleitineraryType,
  flightsData,
  handleClassType,
  classTypes,
  useFetchFlightsQuery,
} from "../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FlightList from "./FlightList";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [skip, setSkip] = useState(true);

  const { flightsInput, flightList } = useSelector((state) => {
    return {
      flightsInput: state.flights.input,
      flightList: state.flights.data,
    };
  });

  const { data, error, isSuccess, isFetching } = useFetchFlightsQuery(
    flightsInput,
    {
      skip,
    }
  );

  useEffect(() => {
    dispatch(flightsData(data));
  }, [data]);

  const dispatch = useDispatch();

  const { departure, arrival, passangers, ineraryType, classType } =
    useSelector((state) => {
      return {
        departure: state.form.locStart,
        arrival: state.form.locEnd,
        passangers: state.form.adults,
        ineraryType: state.form.itineraryType,
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
    setSkip(false);
    dispatch(locDeparture(departure));
    dispatch(locArrival(arrival));
    dispatch(departureDate(formatDepartureDate));
    dispatch(returnDate(formatReturnDate));
    dispatch(ininerType(ineraryType));
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
      <Panel className=" w-1/5 h-3-5  ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row ">
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
                <option value="ECO">Economy</option>
                <option value="PEC">Premium Economy</option>
                <option value="BUS">Business</option>
                <option value="FST">First</option>
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
