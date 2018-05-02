import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class DataSwitcher extends Component {

    constructor(props) {
        super(props);

        this.state = { rSelected: this.props.activeContinent };
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    }

    onRadioBtnClick(rSelected) {
        this.props.getDestinations(rSelected);
        this.setState({ rSelected });
    }


    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("All")} active={this.state.rSelected === "All"}>All</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("Asia")} active={this.state.rSelected === "Asia"}>Asia</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("Europe")} active={this.state.rSelected === "Europe"}>Europe</Button>
                    <Button color="primary" onClick={() => this.onRadioBtnClick("North America")} active={this.state.rSelected === "North America"}>North America</Button>
                </ButtonGroup>
            </div>
        );
    }
}

export default DataSwitcher;