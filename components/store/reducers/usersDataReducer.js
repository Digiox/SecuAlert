const initialState = {
    firstName: {
        key: "firstName",
        val: ""
    },
    lastName: {
        key: "lastName",
        val: ""
    },
    nickName: {
        key: "nickName",
        val: ""
    },
    password: {
        key: "password",
        val: ""
    },
    email: {
        key: "email",
        val: ""
    }
}

function usersData(state = initialState, action) {


    let nextState
    switch (action.type) {
        case 'USER_KEY': //to change only one key EX: dispatch({type: "USER_KEY", value: {key: "nickName", val: "Albert32"}})
            nextState = {
                ...state,
                [action.value.key]: {
                    key: action.value.key,
                    val: action.value.val
                }
            }
            return nextState || state
        case 'USER':
            /*to change multiple keys of in the user data EX:
             dispatch({type: "USER", value: {
                firstName: {
                    key: "firstName",
                    val: ""
                },
                lastName: {
                    key: "lastName",
                    val: ""
                },
                nickName: {
                    key: "nickName",
                    val: ""
                },
                password: {
                    key: "password",
                    val: ""
                },
                email: {
                    key: "email",
                    val: ""
                }})*/
            nextState = {
                ...action.value
            }
            return nextState || state
        default:
            return state
    }
}

export default usersData