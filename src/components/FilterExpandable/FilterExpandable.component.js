import React, { useState } from 'react';
import TextPlaceholder from '../TextPlaceholder';

export const FilterExpandable = (props) => {
  const { id, name, items, isLoading } = props;

  const [expand, setExpand] = useState(false);

  const handleExpandOptions = (e) => {
    if (e.target.className === 'FilterName') {
        setExpand(!expand);
    }
  };

  const renderfilterOption = () => {
        const option = items?.map((option) => {
            return (
                <div className='FilterOption'>
                    <input 
                        type='checkbox'
                        value={ option.name }
                        id={ option.id }
                    />
                    <label id={ option.id }>{option.name}</label>
                </div>
            );
        });

        return option;
    }


  return (
    <article key={id} className='Filter' onClick={ (e) => handleExpandOptions(e) }>
        <div className='FilterName'>
            { !isLoading ? 
            (<>
                <p>{name}</p>
                <span>+</span>
            </> ) :
                <TextPlaceholder length='medium' /> }
        </div>
        <div className={ expand ? 'FilterOptions_expanded' : 'FilterOptions' }>
            { renderfilterOption() }
        </div>
    </article>
  )
};

export default FilterExpandable;
