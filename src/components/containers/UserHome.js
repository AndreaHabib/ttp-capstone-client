import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import "../layout/style/userhome.css"
import {me} from '../../store'
import "../layout/style/userhome.css"

export class UserHome extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {firstName, email} = this.props

    return (
      <div>
        {email ? (
          <h4>
            Welcome back,{' '}
            {firstName ? firstName : email.slice(0, email.indexOf('@'))}.
          </h4>
        ) : (
          <div>
            <h4>
              Hello, guest.
              <br />
              <br />
              Be sure to login or sign up.
            </h4>
          </div>
        )}

        <br />

        <progress
          value="0"
          max="100"
          style={{height: '0.5vh'}}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    firstName: state.user.firstName,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

UserHome.propTypes = {
  firstName: PropTypes.string,
  email: PropTypes.string
}