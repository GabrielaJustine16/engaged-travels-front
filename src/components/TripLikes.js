import React from 'react'
import { connect } from 'react-redux';
import addLikes from '../actions/addLikes.js'



export class TripLikes extends React.Component {
    state = {
      likes: 0,
    };

    
    
    
    handleClick = () => {
        const cnt = parseInt(this.state.count)
      this.setState({
          likes: cnt + e.target.value
      })
          
    };

    handleSubmit(event) {
        props.addLikes(stte.likes)
    }
    
    
    
     render() {
       const { addLikes } = this.props;
      return <div>
        <form onSubmit={this.handleSubmit}>
         <button onClick={this.handleClick}>Add Likes</button>{this.state.count}
   <input type="number" value={this.state.increment} onChange={(e) => this.setState ({increment: e.target.value})} />
        </form>
      </div>
    }
  }
  const mapStateToProps = state => {
    return {
      signupFormData: state.signupForm
    }
  }

  export default connect(mapStateToProps, { addLikes })(TripLikes)