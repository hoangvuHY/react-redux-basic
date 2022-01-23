
const initialState = {
    users: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Joni' },
        { id: 3, name: 'ERik' },
    ],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            // Có thể đưa vào action
            return {
                ...state,
                users: state.users.filter(
                    user => user.id !== action.payload
                )
            }
        case 'ADD_USER':
            const userId = Math.floor(Math.random() * 10000);
            // Có thể đưa vào action
            const user = {
                id: userId,
                name: `${userId} new user`
            };

            return {
                ...state,
                users: [...state.users, user]
            };

        default:
            break;
    }
    return state;
}

export default rootReducer;
