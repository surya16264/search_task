import React from 'react';
import Product from '../../components/Product';
import ContentWrapper from '../../components/ContentWrapper';
import FilterOverlay from '../../components/FilterOverlay';
import SortOptions from '../../components/SortOptions';
import Pagination from '../../components/Pagination';

import './SearchPage.style.scss';

const SearchPage = (props) => {
    const { optimizedFn, state, dispatch, searchText } = props;

    const renderProductCard = () => {
        const { state: { searchData: { details = [] } } } = props;

        if(details.length === 0) {
            return Array.from(
                { length: 10 },
                (_, i) => {
                    return (
                        <Product
                            key={ i }
                            isLoading
                            product={ {} }
                        />
                    );
                }
            );
        }

        const product = details?.slice().map((product) => {
            return (
                <Product key={product.__id} product={product} />
            );
        });

        return product;
    }

    return (
        <ContentWrapper>
                <div className='SearchPage'>
                <h1>Search Page</h1>
                <div className='SearchField'>
                    <label for="search">Search :</label>
                    <input type='search' id='search' onChange={ (e) => optimizedFn(e) }/>    
                </div>
                {
                    searchText ? (
                        <div className='SearchResultText'>
                            <p>Showing results for: { searchText }</p>
                        </div>
                    ) : null
                }
                <div className='CategoryPage'>
                    <div className='FiltersOptions'>
                        <FilterOverlay product={state} />
                    </div>
                    <div className='ProductBlocks'>
                        <SortOptions product={ state } />
                        <div className='Products'>
                            { renderProductCard() }
                        </div>
                        <div className='PaginationBlock'>
                            <Pagination product={ state } dispatch={ dispatch }/>
                        </div>
                    </div>
                </div>
                </div>
        </ContentWrapper>
    );
};

export default SearchPage;