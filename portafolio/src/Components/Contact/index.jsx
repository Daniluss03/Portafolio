import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Contact = () => {


  return (
    <section>
  <Box sx={{ width: 300 }}>
    
      <Slider defaultValue={70} step={10} marks min={10} max={110} disabled />
    </Box>
  </section>
  )
}

export default Contact