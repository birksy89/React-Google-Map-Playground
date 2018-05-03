import React, { Component } from 'react';
//3rd Party
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
//Mine
import List from './components/List'
import Map from './components/Map'
import StyledComponent from './components/StyledComponent'
import DataSwitcher from "./components/DataSwitcher";
//Data
import Fallback from "./data/fallback";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      continent: 'Europe',
      destinations: []
    };


  }

  componentDidMount() {
    var continent = this.state.continent;
    this.getDestinations(continent)
  }

  getDestinations(continent) {

    let destinations = null;

    //Go Get all the data
    axios.get(`http://xxx.me/api/2sxc/app/Rondo-Trip/content/Trip-Content`)
      .then(res => {
       destinations = res.data;
        this.setState({
          destinationsAll: destinations,
          destinations: destinations
        });
      })
      .catch(error => {

        console.info("Using Local Data", error)
        this.setState({
          destinationsAll: Fallback,
          destinations: Fallback
        })

      });



    // if (continent === 'All') {
    //   //Go Get some data
    //   axios.get(`http://dnndev.me/api/2sxc/app/Rondo-Trip/content/Trip-Content`)
    //     .then(res => {
    //       const destinations = res.data;
    //       this.setState({
    //         destinations: destinations
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    // else {
    //   //Go Get some data
    //   axios.get(`http://dnndev.me/api/2sxc/app/Rondo-Trip/query/Filter by Continent?Continent=${continent}`)
    //     .then(res => {
    //       const destinations = res.data.Default;
    //       this.setState({

    //         destinations: destinations
    //       });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }


  }


  filterDestinationsByCountryFromMarker(marker) {
    //console.log("Hit App Component!");
    //console.log(marker);
    //This takes an array and filters based on a property - ie country
    var currentDestinations = this.state.destinations;
    //console.log(currentDestinations);

    var filteredDestinations = currentDestinations.filter(destination => destination.Country === marker.Country);
    //console.log(filteredDestinations);

    this.setState({
      destinations: filteredDestinations
    })

  }

  filterDestinationsByContinent(continent) {

    //This takes an array and filters based on a property - ie country
    var allDestinations = this.state.destinationsAll;
    //console.log(allDestinations);

    var filteredDestinations = null;

    if (continent !== 'All') {
      filteredDestinations = allDestinations.filter(destination => destination.Continent === continent);
    }
    else {
      filteredDestinations = allDestinations
    }

    //console.log(filteredDestinations);

    this.setState({
      continent: continent,
      destinations: filteredDestinations
    })

  }

  render() {
    return (
      <div className="App">
        <Container>
          <StyledComponent />
          <Map destinations={this.state.destinations} filterDestinations={this.filterDestinationsByCountryFromMarker.bind(this)} />
          <DataSwitcher filterDestinationsByContinent={this.filterDestinationsByContinent.bind(this)} activeContinent={this.state.continent} />
          <List destinations={this.state.destinations} filterDestinations={this.filterDestinationsByCountryFromMarker.bind(this)} />
        </Container>
      </div>
    );
  }
}

export default App;
