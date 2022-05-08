import React, { useState } from 'react';
import CustomAccordion from '../common/CustomAccordion'
import CategoryDistribution from './CategoryDistribution';

export default function EntityAccordions(props) {


    const entities = props.category_json;
    let entity_values = Object.values(entities)
    let entity_keys = Object.keys(entities)
    entity_keys.forEach((name, i) =>(
        entity_keys[i] =  name.charAt(0).toUpperCase() + name.slice(1)
    ))

  return (
    <div>
        {entity_values.map((entity, i) =>(
            <CustomAccordion
            name={entity_keys[i]}
            secondary={`${entity_keys[i]} breakdown: $ ${props.entity_expense[i]} `}  
            inside = {
                <CategoryDistribution 
                    category={entity}
                    title_text = {`${entity_keys[i]} Distribution`}
                    // series_name = {"Entity"}
                    />
            }
            /> 
        ))}


    </div>
  );
}