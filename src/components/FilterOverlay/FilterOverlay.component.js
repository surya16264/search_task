import FilterExpandable from '../FilterExpandable';

import './FilterOverlay.style.scss';

const Product = (props) => {
    const renderFilters = () => {
        const { filters, isLoading, handleExpandOptions, expand } = props;

        const filter = filters?.map((filter) => {
            const { name, __id, items } = filter;
            return (
                <FilterExpandable
                    name={ name }
                    id={ __id }
                    items={ items }
                    isLoading={ isLoading }
                    handleExpandOptions={ handleExpandOptions }
                    expand={ expand }
                />
            )
        });

        return filter;
    }

    return (
        <>
            <div className='FilterOverlay'>
                <h4>Filters</h4>
                <div className='FilterOverlay-List'>
                    { renderFilters() }
                </div>
            </div>
        </>
    );
};

export default Product;