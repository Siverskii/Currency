export default function(state = {prlsSumm:[false,'']}, action) {
    switch (action.type) {
        case 'SET_CURRENCY_DATA':
            return {
                ...state,
                ...action.data
            }
      }
    return state;
}