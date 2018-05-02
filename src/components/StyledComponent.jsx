import styled from 'styled-components';
import React, { Component } from 'react';

class StyledComponent extends Component {





    render() {

            // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #fff;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
padding: 2em;
background: #c41230;
`;

        return (
            <Wrapper>
            <Title>
             Rondo Travel - Destination Map
            </Title>
          </Wrapper>
        );
    }
}

export default StyledComponent;