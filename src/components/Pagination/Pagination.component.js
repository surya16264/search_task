import './Pagination.scss';

export const Pagination = (props) => {
    const { dispatch, product: { currentPage, isLoading } } = props;
    
    const setCurrentPage = (value) => {
        dispatch({
            type: 'SET_CURRENT_PAGE',
            page: value
        });
    }

    const renderPageSizes = () => {
        if (isLoading) {
            return Array.from({ length: 5 }, (__, i) => {
                return (
                    <div className="paginationPlaceholder" />
                )
            });
        }

        return Array.from({ length: 5 }, (__, i) => {
            return (
                <button className={ currentPage === i+1 ? "PaginationNumbers_active" : "PaginationNumbers" } onClick={ () => setCurrentPage(i+1) }>
                    { i+1 }
                </button>
            )
        });
    }


    return (
        <div className='Pagination'>
            <button
            className='prevBtn'
            disabled={ currentPage===1 } 
            onClick={ () => dispatch({ type: 'PREV_PAGE', page: currentPage - 1 }) }
            >
                Prev
            </button>
            { renderPageSizes() }
            <button
            className='nextBtn'
            disabled={ currentPage===5 } 
            onClick={ () => dispatch({ type: 'NEXT_PAGE', page: currentPage + 1 }) }
            >
                Next
            </button>
        </div>
    )
};

export default Pagination;
