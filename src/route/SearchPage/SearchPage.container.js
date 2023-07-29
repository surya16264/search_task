/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useReducer, useCallback } from 'react';
import SearchPage from './SearchPage.component';
import { fetchSearchData } from '../../util/fetchApi';
import { searchReducer } from '../../store/search.reducer';

const SearchPageContainer = () => {
    const [searchText, updateSearch] = useState(null);
    const [state, dispatch] = useReducer(searchReducer, {
        searchData: [],
        isLoading: true,
        currentPage: 1
    });

    const callApi = async(searchText, currentPage) => {
        const data = await fetchSearchData(searchText, currentPage);
        dispatch({
            type: 'SEARCH_DATA',
            payload: data
        })
    }

    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            timer = null;
            func.apply(context, args);
          }, 500);
        };
    };

    useEffect(() => {
        callApi(searchText, state.currentPage);
    }, [searchText, state.currentPage]);

    const onHandleChange = (e) => {
        updateSearch(e.target.value);
    };

    const optimizedFn = useCallback(debounce(onHandleChange), []);


    const containerFunctions = {
        optimizedFn: (e) => optimizedFn(e)
    };

    const containerProps = () => {
        return {
            state,
            dispatch,
            searchText
        };
    };

    return (
        <SearchPage 
            { ...containerFunctions }
            { ...containerProps() }
        />
    );
};

export default SearchPageContainer;