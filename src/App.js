import React, { Component } from 'react';

//3rd Party
import axios from 'axios';
//Mine
import List from './components/List'
import Map from './components/Map'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allDestinations: [],
      destinations: []
    };


  }


  componentDidMount() {
    console.log("Mounted")
    var pathArray = window.location.pathname.split('/');
    var lastPath = pathArray.pop() || "Europe";
    //Check what path we're using
    console.log(lastPath);

    //Go Get some data
    axios.get('http://dnndev.me/api/2sxc/app/Rondo-Trip/query/Filter by Continent?Continent=Europe')
      .then(res => {
        const destinations = res.data.Default;
        this.setState({
          destinations: destinations,
          allDestinations: destinations
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  resetDestinations() {
    console.log("Resetting...")

    var all = this.state.allDestinations;

    this.setState({
      destinations: all
    })
  }

  filterDestinations(marker) {
    console.log("Hit App Component!");
    console.log(marker);
    //This takes an array and filters based on a property - ie country
    var currentDestinations = this.state.destinations;
    //console.log(currentDestinations);

    var filteredDestinations = currentDestinations.filter(destination => destination.Country === marker.Country);
    //console.log(filteredDestinations);

    this.setState({
      destinations: filteredDestinations
    })

  }

  render() {
    return (
      <div className="App">
        <Map destinations={this.state.destinations} filterDestinations={this.filterDestinations.bind(this)} />
        <button onClick={this.resetDestinations.bind(this)}>Reset</button>
        <List destinations={this.state.destinations} filterDestinations={this.filterDestinations.bind(this)} />
      </div>
    );
  }
}

export default App;
