import React, { Component } from 'react';

class List extends Component {


    linkHelper(linkData) {
        var tabID = linkData.split(':').pop();
        var dnnLink = `/default.aspx?tabid=${tabID}`;
        return dnnLink
    }

    handleClick(marker){

        //console.log(marker)
        this.props.filterDestinations(marker);
    }

    renderHTML(data) {



        return (


            <div key={data.Title} className="card mb-3" style={{position:'relative'}} onClick={()=>this.handleClick(data)}>
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <a  href={this.linkHelper(data.LinkURL)} >
    <img className="img-fluid" src={data.Image} alt=""/>
                        </a>
                    </div>
                    <div className=" col-lg-7 col-xl-8">
                        <div className="p-3">
                            <h3>
                                <a href={this.linkHelper(data.LinkURL)} >
                                    {data.Title}
                                </a>
                            </h3>
                            <p>
                                {data.IntroText}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="">
                {this.props.destinations.map(destination => this.renderHTML(destination))}
            </div>
        );
    }
}

export default List;