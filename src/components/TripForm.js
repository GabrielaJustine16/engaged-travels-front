import React from 'react';
import { updateTripForm } from '../actions/tripForm'
import { connect } from 'react-redux'


const TripForm = ({ formData, updateTripForm, userId, trip, handleSubmit, editMode }) => {

  const { name, startDate, endDate } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    
    updateTripForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="start date"
        name="startDate"
        onChange={handleChange}
        value={startDate}
      /><br/>
      <input
        placeholder="end date"
        name="endDate"
        onChange={handleChange}
        value={endDate}
      /><br/>
      <input
        type="submit"
        value={editMode ? "Update Trip" : "Create Trip" }
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.tripForm,
    userId
  }
}

export default connect(mapStateToProps, { updateTripForm })(TripForm);