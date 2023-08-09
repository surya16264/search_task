import FilterExpandable from '../FilterExpandable';
import { isMobile } from '../../util/Mobile';

import './FilterOverlay.style.scss';

const Product = (props) => {
    const { visible, handleOverlay, closeOverlay } = props;
    
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

    if (isMobile.any()) {
        return (
            <>
                <div className='FilterOverlay'>
                    <h4 className='FilterHeading' onClick={ () => handleOverlay() }>Filters</h4>
                    <div className={ visible ? 'Overlay_isVisible' : 'Overlay' }>
                        <div className='FilterOverlay-Wrapper'>
                            <div className='FilterHead'>
                                <h4>Filters</h4>
                                <div className="CloseIcon" onClick={ () => closeOverlay() }>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#000"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z" />
                                    </svg>
                                </div>
                            </div>
                            { renderFilters() }
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className='FilterOverlay'>
                <h4>Filters</h4>
                {
                    !isMobile.any()
                    ? (
                        <div className='FilterOverlay-List'>
                            { renderFilters() }
                        </div>
                    ) : null
                }
            </div>
        </>
    );
};

export default Product;