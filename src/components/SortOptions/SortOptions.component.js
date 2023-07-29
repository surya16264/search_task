import TextPlaceholder from '../TextPlaceholder';

import './SortOptions.scss';

export const SortOptions = (props) => {
  const { product: { searchData: {sort_options }, isLoading } } = props;

  return (
    <div className='SortOptions'>
        <p className='SortLabel'>sort</p>
        {
            !isLoading ?
            <select placeholder='Select..' className='DropdownContainer'>
                {
                    sort_options?.map((option) => {
                        return <option>{option.label}</option>
                    })
                }
            </select> :
            <TextPlaceholder length='short' />
        }
    </div>
  )
};

export default SortOptions;
