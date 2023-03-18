import React from 'react'
import { ReactDOM } from 'react';
import './App.css';
import { fetchFishData, fetchAllFishData } from './api';

class App extends React.Component {
  state = {
      data: [{}],
  }

  async componentDidMount() {
      const fetchedData = await fetchAllFishData();
      console.log(fetchedData)
      this.setState({data: fetchedData});
  }
  render() {
    const { data } = this.state
    console.log(data)
    return (
      data.map((data) => (
        <div>{data.price}</div>
      ))
    );
  }
}

export default App;
