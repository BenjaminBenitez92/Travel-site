import React, { useState } from "react";
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
} from "../store";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();
  const { departure, arrival, passangers, ineraryType } = useSelector(
    (state) => {
      return {
        departure: state.form.locStart,
        arrival: state.form.locEnd,
        passangers: state.form.adults,
        ineraryType: state.form.itineraryType,
      };
    }
  );

  const handleOnChangeDeparture = (e) => {
    dispatch(handleLocStart(e.target.value));
  };
  const handleOnChangeArrival = (e) => {
    dispatch(handleLocEnd(e.target.value));
  };
  const handleOnClick = (e) => {
    dispatch(handleitineraryType(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formatDepartureDate = startDate.toISOString().split("T")[0];
    let formatReturnDate = endDate.toISOString().split("T")[0];
    dispatch(locDeparture(departure));
    dispatch(locArrival(arrival));
    dispatch(departureDate(formatDepartureDate));
    dispatch(returnDate(formatReturnDate));

    dispatch(ininerType(ineraryType));
  };

  return (
    <div>
      <Panel>
        <form onSubmit={handleSubmit}>
          <button onClick={onsubmit}>sub</button>
          <div>
            <div>
              <label>
                <div>
                  <input
                    onClick={handleOnClick}
                    type="radio"
                    value="ROUND_TRIP"
                  />
                </div>
                Round Trip
              </label>
            </div>
            <div>
              <label>
                <div>
                  <input onClick={handleOnClick} type="radio" value="ONE_WAY" />
                </div>
                One-Way
              </label>
            </div>
            <div>
              <label>
                <div>
                  <input type="radio" />
                </div>
                Multi-destination
              </label>
            </div>
          </div>
          <div>
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
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default Form;
