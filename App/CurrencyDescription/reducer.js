export default function(state = {}, action) {
    switch (action.type) {
        case 'SET_CURRENCY_DESCRIPTION':
            return {
                ...state,
                ...action.data
            }
      }
    return state;
}