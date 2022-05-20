import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const CustomCard = styled(Card)`
  background: #fff;
  margin:10px;
`;

function Singletask() {
    return (
        <CustomCard sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Task due date
                    </Typography>
                    <Button variant="contained" color="success">set Completed</Button>
                </Box>
                <Typography variant="h5" component="div">
                    Task Name
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    difficulty
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, dolor. Atque veniam labore debitis ullam minus nesciunt sint. Neque, odit.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small">Edit</Button>
                <Button variant="contained" color='error' size="small">Delete</Button>
            </CardActions>
        </CustomCard>
    )
}

export default Singletask