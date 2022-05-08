import * as React from 'react';
import Typography from '@mui/material/Typography';
import CustomAccordion from '../common/CustomAccordion'
import CategoryDistribution from '../dashboard/CategoryDistribution';

export default function EntityAccordions(props) {

    const categories = props.categories;
    let categories_values = []
    let categories_keys = []
    if (categories !== undefined && categories !== null){
        categories_values = Object.values(categories)
        categories_keys = Object.keys(categories)
    }

    // Get rid of the empty categories
    const not_empty_category = []
    const not_empty_category_name = []

    categories_values.forEach(function(category, i){
        const keys = Object.keys(category)
        keys.forEach(function (key){
            if(categories_values[i][key] !== 0 && !(not_empty_category.includes(categories_values[i]))){
                categories_keys[i] = categories_keys[i].charAt(0).toUpperCase() + categories_keys[i].slice(1);
                not_empty_category.push(categories_values[i])
                not_empty_category_name.push(categories_keys[i])
            }
        })
    })

    // console.log(not_empty_category)
    // console.log(not_empty_category_name)
  return (
    <div>
        <Typography sx={{fontWeight: 'bold', mt: 2, mb: 2 }} variant="h7" component="div">
            Expense Breakdown
        </Typography>

        {/* <CustomAccordion
            name="Income"
            secondary="Income Breakdown"
            list={categories}/> */}

        
        {not_empty_category.map((category, i) =>(
            // console.log(category)
            <CustomAccordion
            name={not_empty_category_name[i]}
            secondary={`${not_empty_category_name[i]} category breakdown: $ ${category[not_empty_category_name[i]]}`}
            inside={           
                <CustomAccordion
                name={not_empty_category_name[i]}
                secondary={`${not_empty_category_name[i]} category breakdown`}
                />
                // <CategoryDistribution 
                //     category={category}
                //     title_text = {`${not_empty_category_name[i]} Distribution`}
                //     series_name = {"Entity"}/>
                
                }
            />
        ))}
    </div>
  );
}