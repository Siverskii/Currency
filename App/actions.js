const cName = {
    BTC:'Bitcoin',
    ETH:'Ethereum',
    XRP:'Ripple'
}

export const getCurrency = () =>{
    const cTotal = {
        BTC: Math.round(Math.random() * 100000) / 100000,
        ETH: Math.round(Math.random() * 1000000) / 100000,
        XRP:Math.round(Math.random() * 100000000) / 100000,
    }
    return async (dispatch) => {
        const response = await fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD`, {
            method: 'GET',
        });
        const data = await response.json();
        const curr = Object.entries(data).map((currency) =>{
            return {
                name: cName[currency[0]],
                cname:currency[0],
                total: cTotal[currency[0]],
                price:currency[1].USD,
                prls:[Math.random() > 0.5 ? true : false, Math.round(Math.random() * 10000)/100],
            }  
        });
        
        const initialValue =0;
        let summ = curr.reduce((val,item)=>{
            return val + (cTotal[item.cname] * item.price)
        },initialValue);
        summ = Math.round(summ * 100) / 100;
        
        const prlsSumm = [Math.random() > 0.5 ? true : false, Math.round(Math.random() * 10000)/100];

        dispatch(setCurrencyData({summ, prlsSumm, currency:curr}));
    };  
}

const setCurrencyData = (data) =>{
    return {
        type: "SET_CURRENCY_DATA",
        data
    }
}

