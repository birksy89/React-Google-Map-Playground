import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class DataSwitcher extends Component {

    constructor(props) {
        super(props);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.props.filterDestinationsByContinent(rSelected);
    }


    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("All")} active={this.props.activeContinent === "All"}>All</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("Asia")} active={this.props.activeContinent === "Asia"}>Asia</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("Europe")} active={this.props.activeContinent === "Europe"}>Europe</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("North America")} active={this.props.activeContinent === "North America"}>North America</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default DataSwitcher;