import React from 'react';
import './InfoBox.css'
import {Card,CardContent, Typography} from '@material-ui/core'

function InfoBox({title,cases,isRed,active,total,...props}) {
    return (
        
        <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'} ${isRed && 'isRed'}` } >
            <CardContent>
                <Typography className='infoBox__title' color='textSecondary'>
                    {title}

                </Typography>
                <h2 className='infoBox__cases' >{cases}</h2>
                <Typography className='infoBox__total' color='textPrimary'>
                    {total} total
                </Typography>
            </CardContent>
        </Card>
            
    )
}

export default InfoBox;
