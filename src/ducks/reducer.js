const initialState = {
    username: '',
    password: '',
    picture: '',
    userId: null
}

const UPDATE_USER = "UPDATE_USER";

function reducer(state=initialState, action) {
    console.log('Reducer Got hit with this ->', action);

    switch(action.type) {

        case UPDATE_USER:
        const {userId, username, picture} = action.payload
        return Object.assign( {}, state, { userId: userId, username: username, picture: picture } );
        default: return state;
    }
}

export default reducer;



export function currentUser(userId,username,picture) {

    return {
        type: UPDATE_USER,
        payload: {
            userId: userId,
            username: username,
            picture: picture
        }
    }
}
// function reducer(state = initialState, action) {
//     console.log('Reducer Got hit with this ->', action);

//     switch( action.type) {

//         case UPDATE_HOUSE:
//         console.log(action.payload)
//         const { name, address, city, St, zipcode} = action.payload
//         return Object.assign( {}, state, { name: name, address: address, city: city, St: St, zipcode: zipcode } );

//         case UPDATE_IMG:
//         console.log(action.payload)
//         return Object.assign( {}, state, { img: action.payload } );

      
//         default: return state;
//     }
// };

