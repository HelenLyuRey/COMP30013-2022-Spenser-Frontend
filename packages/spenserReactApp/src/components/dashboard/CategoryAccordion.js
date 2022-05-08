import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import CustomAccordion from '../common/CustomAccordion'
import EntityAccordion from './EntityAccordion';

export default function CategoryAccordions(props) {

    function sum( obj ) {
        var sum = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sum += parseFloat( obj[el] );
          }
        }
        return sum;
      }


    const categories = props.categories;
    let categories_all_values = []
    let categories_keys = []

    let entity_expense_list = [] // list of list
    let category_expense = [] // list of numbers

    if (categories !== undefined && categories !== null){
        categories_all_values = Object.values(categories)
        categories_keys = Object.keys(categories)
    }

    categories_keys.forEach((name, i) =>(
        categories_keys[i] =  name.charAt(0).toUpperCase() + name.slice(1)
    ))

    // Find category and entity sum
    categories_all_values.forEach((category)=>{
        let entity_values = Object.values(category)
        let entity_expense = []
        entity_values.forEach((entity) =>{
            entity_expense.push(sum(entity))
        })
        entity_expense_list.push(entity_expense)

        const reducer = (accumulator, curr) => accumulator + curr;
        category_expense.push(entity_expense.reduce(reducer))
    })

  return (
    <div>
        <Typography sx={{fontWeight: 'bold', mt: 2, mb: 2}} variant="h7" component="div">
            Expense and Income Breakdown
        </Typography>
        
        {categories_all_values.map((category, i) =>(
            <CustomAccordion
            name={categories_keys[i]}
            secondary={`${categories_keys[i]} category breakdown: $ ${category_expense[i]} `}  
            inside = {
                <EntityAccordion
                category_json = {category}
                entity_expense = {entity_expense_list[i]}/>
            }
            /> 
        ))}


    </div>
  );
}