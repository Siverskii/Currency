import React from 'react';
import {Route, Switch } from 'react-router-dom';
import CurrencyDescription from './CurrencyDescription/CurrencyDescription'
import Wallet from './Wallet/Wallet'
import {GlobalStyle} from "./GlobalStyle"
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from './actions';

const Container = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  padding: 1rem;
  background: #363846;
  display: flex;
  flex-direction:column;
`


class Currency extends React.Component {
  constructor(props) {
    super(props);
}      

componentDidMount(){
  this.props.getCurrency();
}
  render() {
    return(
    <React.Fragment>
        <GlobalStyle/>   
        <Container>
            <Route path="/" component={Wallet} exact/>
            <Route path="/:name" component={CurrencyDescription} exact/>
        </Container>
    </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
     state
  }
}

export default connect(mapStateToProps,actions)(Currency);