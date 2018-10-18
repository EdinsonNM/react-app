import React from 'react';
import { Card as CardMaterial, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
const Card = ({name, url}) => {
    return (
        <CardMaterial>
            <CardActionArea>
                <img src={url}  width="100%"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </CardMaterial>
    )
}
export default Card;