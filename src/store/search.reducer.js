export const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_DATA': {
            const { payload } = action;
            return {
                ...state,
                searchData: payload,
                isLoading: payload?.details.length ? false : true
            };
        }

        case 'SET_CURRENT_PAGE': {
            const { page } = action;
            return {
                ...state,
                currentPage: page
            };
        }

        case 'PREV_PAGE': {
            const { page } = action;
            return {
                ...state,
                currentPage: page
            };
        }

        case 'NEXT_PAGE': {
            const { page } = action;
            return {
                ...state,
                currentPage: page
            };
        }
            
        default:
            break;
    }
};