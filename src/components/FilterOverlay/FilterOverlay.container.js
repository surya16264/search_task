import FilterOverlay from './FilterOverlay.component';

const FilterOverlayContainer = (props) => {

    const containerProps = () => {
        const { product: { searchData: { filters = [], total }, isLoading } } = props;

        return {
            filters,
            total,
            isLoading
        };
    };

    return (
        <FilterOverlay 
            { ...containerProps() }
        />
    );
};

export default FilterOverlayContainer;