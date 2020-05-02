import styled from 'styled-components';

const Coins = styled.i`
  font-family: 'coins';
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const Icons = styled(Coins)`
  font-family: 'icons';
  font-size: 1.25rem;
  text-shadow: 0px 0px 1px white, 0px 0px 1px white, 
                 0px 0px 1px white, 0px 0px 1px white,
                 0px 0px 1px white, 0px 0px 1px white,
                 0px 0px 1px white, 0px 0px 1px white;
  color:#363846;
`

export const XRP = styled(Coins)`
  &::before{
    content: "\\e9b4";
    font-size: 1.5rem;
    color: #0089c5;
  } 
`
export const BTC = styled(Coins)`
  &::before{
    content: "\\e918";
    background: #fa9e15;
    border-radius: 50%;
    padding: .25rem;
    color: white;
    display: inline-block;
    transform: rotate(15deg);
  } 
`
export const ETH = styled(Coins)`
  &::before{
    content: "\\e931";
    font-size: 1.75rem;
    color: #848484;
  } 
`
export const Search = styled(Icons)`
  &::before{
    content: "\\e800";
  } 
`
export const Arrow = styled(Icons)`
  &::before{
    content: "\\e801";
    color: white;
  } 
`
export const Bell = styled(Icons)`
  &::before{
    content: "\\f0f3";
  } 
`

