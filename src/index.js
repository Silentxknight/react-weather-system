import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";

import "./index.css";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const App = () => {
//   return <div>Hi There</div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   console.log("Cosntructor Started....");
  //   super(props);
  //   // this.state = { lat: null, errMsg: "" };
  // }
  state = { lat: null, errMsg: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        this.setState({ lat: position.coords.latitude }); //* callin setState()
      },
      (err) => {
        console.log(err);
        this.setState({ errMsg: err.message });
      }
    );
  }
  renderContent() {
    if (this.state.lat && !this.state.errMsg) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    } else {
      return (
        <div>
          <Spinner msg="Please accept the location request" />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
