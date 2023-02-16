/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
const FlightList = ({isSuccess}) => {
  const flightData = useSelector((state) =>{
    return state.flights.data
  })
  console.log(flightData)
  let renderAirline
  if(isSuccess){
   renderAirline = flightData.airline.map((data)=>{
    
    return <div key={data.name}>
      <img src={data.smallImage} alt="" />
      
      {data.name}
    </div>
  })}
  return (
    <div>
      {renderAirline}
    </div>
  )
}

export default FlightList
