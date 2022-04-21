import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../dashboard/dashboard.css";

export default function CustomAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  function entityList(list){
    var elements = [];

    if(list != undefined && list != null){
      Object.entries(list).forEach((entry) => {
        const [key, value] = entry;
        const key_removed = key.slice(0, key.indexOf('_'));
        const key_cap = key_removed.charAt(0).toUpperCase() + key_removed.slice(1);
        if(value !== 0)
          elements.push(<li>{key_cap + ": " + value}</li>);
      })
    }else{
      elements.push(<li>No value yet</li>);
    }
    return elements;
}

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.name}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{props.secondary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography> */}
              <div className="parent-list">
                <ul>
                    {entityList(props.list)}
                </ul>
            </div>
          {/* </Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}