import * as React from 'react';
import Typography from '@mui/material/Typography';
import CustomAccordion from '../common/CustomAccordion'

export default function EntityAccordions(props) {

    const entities = props.entities;
    let food = "";
    let shop = "";
    if (entities !== undefined && entities !== null){
        food = entities[0]
        shop = entities[1]
    }

  return (
    <div>
        <Typography sx={{fontWeight: 'bold', mt: 2, mb: 2 }} variant="h7" component="div">
            Expense Breakdown
        </Typography>

        {/* <CustomAccordion
            name="Income"
            secondary="Income Breakdown"
            list={entities}/> */}

        <CustomAccordion
            name="Food"
            secondary="Food Category Breakdown"
            list={food}/>

        <CustomAccordion
            name="Shop"
            secondary="Shop Category Breakdown"
            text="Shop here here here"
            list={shop}
            />
    </div>
  );
}