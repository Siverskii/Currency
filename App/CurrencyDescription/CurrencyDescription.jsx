import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from './actions';
import {Link} from 'react-router-dom';
import {Arrow} from '../Icons';
import {Chart} from './Chart';
import {DescriptionItem} from './DescriptionItem';

const ScrollContainer = styled.div`
  width:100%;
  min-height: 3.5rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x:scroll;
`
const Title = styled.div`
  width:100%;
  display: flex;
  font-size: 1.5rem;
`
const ChartContainer = styled.div`
  width:100%;
  height: 100%;
  display:flex;
  flex-direction: column;
`
const ControlPanel = styled.div`
  padding-left: .5rem;
  display:flex;
`
const PanelItem = styled.div`
  width: 3rem;
  padding: .25rem;
  margin: .25rem;
  color: ${(props) =>{return props.active ? "white" : "#71717c"}};
  background: ${(props) =>{return props.active ? "#41404d" : "none"}};
  text-align:center;
`


export class CurrencyDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      activePeriod: 'day'
    }
   this.goBack = this.goBack.bind(this);
   this.changePeriod = this.changePeriod.bind(this);
  } 
  
  goBack(){
    this.props.history.push("/");
  }

  changePeriod(e){
    if(e.target.dataset.period != undefined) this.setState({
      activePeriod:e.target.dataset.period
    });
    this.props.getDescription(this.props.match.params.name,e.target.dataset.period);
  }

  componentDidMount(){
    this.props.getDescription(this.props.match.params.name,this.state.activePeriod);
  }

  render() {
    return(
      <React.Fragment>
        <Arrow onClick={this.goBack}/>
          <ScrollContainer>
            {this.props.wallet.currency != undefined && this.props.wallet.currency.map((currency)=>{
                return (
                  <Link onClick={this.props.getDescription.bind(this, currency.cname,'day')} to={`/${currency.cname}`} key={currency.cname} style={{ textDecoration: 'none', margin: '0 .5rem' }}>
                    <DescriptionItem {...currency}/>
                  </Link>
                )
              })}
          </ScrollContainer>
          <Title>
            {this.props.wallet.currency != undefined && <DescriptionItem type={'title'} {...this.props.wallet.currency.filter((curr)=>curr.cname == this.props.match.params.name)[0]}/>}
          </Title>
          <ChartContainer>
          <ControlPanel onClick = {this.changePeriod}>
              <PanelItem data-period = "day" active = {this.state.activePeriod == "day"} >Day</PanelItem>
              <PanelItem data-period = "hour" active = {this.state.activePeriod == "hour"}>Hour</PanelItem>
              <PanelItem data-period = "minute"active = {this.state.activePeriod == "minute"}>Minute</PanelItem>
          </ControlPanel>
          <Chart data = {this.props.descr[this.props.match.params.name]}/>
        </ChartContainer>
     </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
    return {
      wallet: state.walletStore,
      descr:state.descriptionStore
    }
  }
  
export default connect(mapStateToProps,actions)(CurrencyDescription);