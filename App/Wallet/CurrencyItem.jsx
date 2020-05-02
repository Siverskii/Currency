import React  from 'react';
import styled from 'styled-components';
import {BTC, ETH, XRP} from '../Icons';

const Currency = styled.div`
  width:100%;
  display: flex;
  background: #41404d;
  flex-direction:column;
  position: relative;
  margin-top: 1rem;
  cursor: pointer;
`
const Container = styled.div`
  width: calc(100% - 1rem);
  padding: .5rem;
  display: flex;
  height:4rem;
  background: #41404d;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width:50%;
  height:100%;
  flex-wrap:wrap;
`
export const IConContainer = styled.div`
    width:  ${(props)=>{return props.type == 'title' ? '2.5rem' : '1.75rem'}};
`
export const InfoContainer = styled.div`
    display: flex;
    flex-grow:1;
    flex-wrap:wrap;
    justify-content:left;
`
export const InfoItem = styled.div`
    width:100%;
    color: ${(props)=>{
        if(props.main){
            if(props.prls != undefined){
                return props.prls ? '#0cd784' :  '#ff7976';
            }else{
                return  'white';
            }
        }else{
            return '#97989e';
        }
    }};
    font-size: ${(props)=>{
        if(props.type == 'title'){
            return props.main ? '1.5rem' : '1rem'
        }else{
            return props.main ? '1rem' : '.8rem'
        } 
     }};
    text-align: ${(props)=>{
        return props.align == 'right' ? 'right' : 'left'
     }};
`

const Separator = styled.div`
   width: 90%;
   height: 1px;
   position: absolute;
   top: calc(50% - 2px);
   left: 5%;
   border-top: 1px solid #4c4b52;
`
export const icons = {
    Bitcoin: <BTC/>,
    Ethereum:<ETH/>,
    Ripple:<XRP/>
}

const TopCurrencyItem = (props) => {
    const {name, cname, price,total} = props;
    return (
        <Container>
        <TitleContainer>
            <IConContainer>{icons[name]}</IConContainer>
            <InfoContainer>
               <InfoItem main={true}>{cname}</InfoItem>
               <InfoItem main={false}>{name}</InfoItem>
            </InfoContainer>
        </TitleContainer>
        <TitleContainer>
           <InfoContainer>
               <InfoItem align={'right'} main={true}>{total}</InfoItem>
               <InfoItem align={'right'} main={false}>${Math.round((price*total*100))/100}</InfoItem>
           </InfoContainer>
        </TitleContainer>
       </Container>
    )
}
const BottomCurrencyItem = (props) => {
    const {price,prls} = props;
    return (    
        <Container>
            <TitleContainer>
                <InfoContainer>
                    <InfoItem  main={true}>${price}</InfoItem>
                    <InfoItem  main={false}>{'Price'}</InfoItem>
                </InfoContainer>
             </TitleContainer>
             <TitleContainer>
                <InfoContainer>
                    <InfoItem align={'right'} main={true} prls={prls[0]}>{prls[0] ?  '+'+prls[1]+'%' : -prls[1]+'%'}</InfoItem>
                    <InfoItem align={'right'} main={false}>{'Profit / Loss'}</InfoItem>
                </InfoContainer>
             </TitleContainer>
        </Container>
    )
}


export const CurrencyItem = (props) => {
    return (
        <Currency>
            <TopCurrencyItem {...props.currency}/>
            <Separator/>
            <BottomCurrencyItem {...props.currency}/>
        </Currency>
    )
}
