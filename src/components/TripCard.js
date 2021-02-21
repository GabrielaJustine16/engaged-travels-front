import React from 'react'
import {Link} from 'react-router-dom'

const TripCard = ({ trip }) => {
  return (
   
    trip ?
      <div>
    { console.log("tripData.tripId: ", trip)}

        <h3>{trip.attributes.name}</h3>
        <p>{trip.attributes.start_date}</p>
        <p>{trip.attributes.end_date}</p>
        <p>{trip.attributes.likes}</p>
        <form action="http://localhost:3001/api/v1/trips/4" method="POST">
          <input type="text"/>
          <input type="submit"/>
        </form>

        <Link to={`/trips/${trip.id}/edit`}>Edit this trip</Link>
      </div> :
      <p>This the the Trip card with no trip!</p>
  )
}

export default TripCard