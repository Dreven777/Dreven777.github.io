const initialState = {
    Admin: true,
    Moderator: true
};

export const userAccess = function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'MAKE_ADMIN':
            console.log(payload);
            return {
                ...state,
                Admin: payload
            };
        case 'MAKE_MODERATOR':
            return {
                ...state,
                Moderator: payload
            };
        default: return state;
    }
}