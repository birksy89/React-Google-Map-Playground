import React, { Component } from 'react';

class List extends Component {

    linkHelper(linkData) {
        var tabID = linkData.split(':').pop();
        var dnnLink = `/default.aspx?tabid=${tabID}`;
        return dnnLink
    }

    renderHTML(data) {

        var cardStyle = {
            backgroundImage: `url('${data.Image}')`,
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (


            <div key={data.Title} className="card mb-3" style={{position:'relative'}}>
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <a style={cardStyle} href={this.linkHelper(data.LinkURL)} >

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
            <div className="row">
                {this.props.destinations.map(destination => this.renderHTML(destination))}
            </div>
        );
    }
}

export default List;