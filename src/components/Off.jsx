import React from 'react'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Typography } from '@mui/material';


// offers

const Off = () => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

  return (
    <section className='off'>
        <div className="container">
            <div className="row text-center">
                <div className="col-sm-12 col-lg-12">
<div className="border-off"></div>
<div className="border-off"></div>

<ThemeProvider theme={theme}>
    <Typography variant='h2' fontWeight="bold" >GET 10% OFF YOUR FIRST ORDER!</Typography>
</ThemeProvider>
<div className="border-off"></div>
<div className="border-off"></div>

                </div>
            </div>
        </div>
     
    </section>
  )
}

export default Off