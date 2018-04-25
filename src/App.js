import React, { Component } from 'react';

//3rd Party
import axios from 'axios';
//Mine
import List from './components/List'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
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
        this.setState({ destinations });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">

        <List destinations={this.state.destinations}/>
      </div>
    );
  }
}

export default App;
