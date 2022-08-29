import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Box, Typography } from '@mui/material'

export default function MyCarousel()
{
    var items = [
        {
            name: "Random Name #3",
            pics : "https://cdn.shopify.com/s/files/1/0599/0206/6871/files/Celebration_With_Tradition_11.png"
        },
    
        {
            name: "Random Name #2",
            pics : "https://cdn.shopify.com/s/files/1/0599/0206/6871/files/4_071d11a8-6372-44a7-bf20-7265818dfcbf.png?"
        },
       
        {
            name: "Random Name #4",
            pics : "https://cdn.shopify.com/s/files/1/0599/0206/6871/files/2_d80fc15f-f1e2-47fc-9dc4-dd88e50c8f07.png"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper sx={{height:"inherit",marginTop:"70px",}}>
            <img style={{width:"100%"}} alt='' src={props.item.pics}/>
            <Typography>
                {props.item.name}
            </Typography>
        </Paper>
      
    )
}