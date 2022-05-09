import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../dashboard/dashboard.css";
import CategoryDistribution from '../dashboard/CategoryDistribution';

export default function CustomAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


//   function entityList(entities){
//     var elements = [];

//     if(entities != undefined && entities != null){
//       const entity_names = Object.keys(entities)
//       entity_names.forEach((entity)=>{
//           let entity_cap = ''
//           if(entity.includes('_')){
//               const entity_space = entity.split('_').join(' ')
//               entity_cap = entity_space.charAt(0).toUpperCase() + entity_space.slice(1);
//           } else{
//               entity_cap = entity.charAt(0).toUpperCase() + entity.slice(1);
//           }
          
//           if(entities[entity] !== 0){
//               elements.push(<li>{entity_cap + ": " + "$ " + entities[entity]}</li>);
//           }
//       })
//     }else{
//       elements.push(<li>No value yet</li>);
//     }
//     return elements;
// }

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            backgroundColor: "#f5f5f5"
          }}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props.secondary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
              <div>
                {/* <ul>
                    {entityList(props.list)}
                </ul> */}
                {props.inside}
            </div>
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}