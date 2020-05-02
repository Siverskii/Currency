import React from 'react';
import styled from 'styled-components';
import {Search, Arrow, Bell} from '../Icons';
import {CurrencyItem} from './CurrencyItem'
import { Scrollbars } from 'react-custom-scrollbars';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';


const ControlPanel = styled.div`
  width: cacl(100% - 1rem);
  padding: 0 .5rem;
  display: flex;
  justify-content: space-between;
`
const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: .75rem;
  display: flex;
  flex-direction: column;
`
const TitleItem = styled.div`
  width: 100%;
  padding: .2rem 0;
  text-align:center;
  font-size: ${(props)=>{
      switch (props.size) {
        case 'small':
            return '.8rem';
        case 'medium':
            return '.95rem';
        case 'big':
            return '2.25rem';
      };
  }};
  color: ${(props)=>{ return props.color}};
`
const TitleItemSymbol = styled.div`
  font-size: 1.1rem;
  display: inline-block;
  height: 2.25rem;
  vertical-align: text-bottom;
`
const WArrow = styled(Arrow)`
  font-size: .7rem;
  transform: ${(props)=>{
    return props.dayRise ? 'rotate(90deg)' : 'rotate(-90deg)'
  }};
  color: ${(props)=>{
    return props.dayRise ? '#0cd784' : '#ff7976'
  }};
  text-shadow:none;
`

class Wallet extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
    <React.Fragment>
      <ControlPanel>
        <Search/> 
        <Bell/> 
      </ControlPanel>
      <TitleContainer>
        <TitleItem size = {'small'} color = {'#97989e'}>Your total balance</TitleItem>
        <TitleItem size = {'big'} color = {'white'}><TitleItemSymbol>$</TitleItemSymbol>{this.props.wallet.summ}</TitleItem>
      </TitleContainer>
      <TitleContainer>
        <TitleItem size = {'medium'} color = {'#97989e'}>24 Changes</TitleItem>
        <TitleItem size = {'medium'} 
                   color = {this.props.wallet.prlsSumm[0] ? '#0cd784' : '#ff7976'}>
          {this.props.wallet.prlsSumm[0] ? '+' + this.props.wallet.prlsSumm[1] : '-'+this.props.wallet.prlsSumm[1]} 
          <WArrow dayRise={this.props.wallet.prlsSumm[0]}/>
        </TitleItem>
      </TitleContainer>
      <Scrollbars>
        {this.props.wallet.currency != undefined && this.props.wallet.currency.map((currency)=>{
          return (
            <Link key = {currency.name} to={`/${currency.cname}`} style={{ textDecoration: 'none' }}>
              <CurrencyItem currency={currency}/>
            </Link>
          )
        })}
      </Scrollbars>
    </React.Fragment>
    )
  }
}


function mapStateToProps(state) {
  return {
     wallet: state.walletStore  
  }
}
export default connect(mapStateToProps)(Wallet);
