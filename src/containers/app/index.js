import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import logo from "./logo.svg";
import "./App.css";
import { clickAction } from "./state/action";

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.clickAction()
  }

  render() {
    const count = this.props.count.count
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to Authors' Haven.</p>
        <h1>{count}</h1>
        <button onClick={this.handleClick}>Add Count</button>
        </header>
      </div>
    );
  }
}
App.propTypes = {
  clickAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => {
  return {
    clickAction: (count) => dispatch(clickAction(count))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
