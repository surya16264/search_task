import { useState } from 'react';
import FilterOverlay from './FilterOverlay.component';

const FilterOverlayContainer = (props) => {
    const [visible, setIsVisible] = useState(false);

    const handleOverlay = () => {
        setIsVisible(true);
    }

    const closeOverlay = () => {
        setIsVisible(false);
    }

    const containerProps = () => {
        const { product: { searchData: { filters = [], total }, isLoading } } = props;

        return {
            filters,
            total,
            isLoading,
            visible
        };
    };

    return (
        <FilterOverlay 
            { ...containerProps() }
            handleOverlay = { handleOverlay }
            closeOverlay={ closeOverlay }
        />
    );
};

export default FilterOverlayContainer;