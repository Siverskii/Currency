import React from 'react';
import {TitleContainer,IConContainer, icons,InfoContainer,InfoItem} from '../Wallet/CurrencyItem';
import styled from 'styled-components';
const Container = styled.div`
  width: ${(props)=>{return props.type == "title" ? '100%' : '225px'}};
  padding: .5rem;
  display: flex;
  height: 2.5rem;
  background:${(props)=>{return props.type == "title" ? 'none' : '#41404d'}};
`
export const DescriptionItem = (props) => {
    const {name, cname,total,prls, type} = props;
    return (
        <Container type={type}>
        <TitleContainer>
            <IConContainer type={type}>{icons[name]}</IConContainer>
            <InfoContainer>
               <InfoItem type={type} main={true}>{cname}</InfoItem>
               <InfoItem type={type} main={false}>{name}</InfoItem>
            </InfoContainer>
        </TitleContainer>
        <TitleContainer>
           <InfoContainer>
               <InfoItem type={type} align={'right'} main={true}>{total}</InfoItem>
               <InfoItem type={type} align={'right'} main={true} prls={prls[0]}>{prls[0] ? '+'+prls[1]+'%' : -prls[1]+'%'}</InfoItem>
           </InfoContainer>
        </TitleContainer>
       </Container>
    )
  }