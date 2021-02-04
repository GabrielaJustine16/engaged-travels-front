import React from 'react'
import { connect } from 'react-redux'
import  TripCard from './TripCard.js'

const MyTrips = props => {
    const tripCards = props.trips.length > 0 ?
        props.trips.map(t => <TripCard trip={t} key={t.id}/>) : null

    return (
        tripCards

    )
}

const mapStateToProps = state => {
    return {
      trips: state.myTrips
    }
  }

export default connect(mapStateToProps)(MyTrips)