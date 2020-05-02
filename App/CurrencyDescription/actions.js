
export const getDescription = (name,period) =>{
    return async (dispatch) => {
        const response = await fetch(`https://min-api.cryptocompare.com/data/v2/histo${period}?fsym=${name}&tsym=USD&limit=10`, {
            method: 'GET',
        });
        const data = await response.json();
        let desc = {};
        desc[name] = data.Data.Data.map((item)=>{
        switch (period){
            case 'day':
                return{
                    time: new Date(item.time * 1000).getDate(),
                    value:item.close
                }
            case 'hour':
                return{
                    time: new Date(item.time * 1000).getHours(),
                    value:item.close
                }
            case 'minute':
                return{
                    time: new Date(item.time * 1000).getMinutes(),
                    value:item.close
                }
        }
        });
      
        dispatch(setDescription(desc));
    };  
}

const setDescription = (data) =>{
    return {
        type: "SET_CURRENCY_DESCRIPTION",
        data
    }
}

