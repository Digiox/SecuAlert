const initialState = {
 user_token: ""
}

function usersData(state = initialState, action) {


    let nextState
    switch (action.type) {
        case 'USER_TOKEN': //to change only one key EX: dispatch({type: "USER_KEY", value: {key: "nickName", val: "Albert32"}})
            nextState = {
               user_token: action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default usersData