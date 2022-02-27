import React, { useState, useEffect } from 'react'
import { Container, Typography } from '@mui/material';
import './ShuffleItem.css'

function ShuffleItem(props) {
    const ingradients = [];

    return (
        <div className='container-div'>
            <Container>
                {props.data &&
                    <Typography
                        variant='h3'
                        textAlign="center"
                        fontWeight="600"
                        padding="15px 0"
                        color="lightblue"
                        boxShadow="0 0 10px 2px grey inset"
                        borderRadius="15px"
                    >{props.data[0].strMeal}</Typography>
                }
                <div className='img-div'>
                    <img src={props.data[0].strMealThumb} alt="Imgae not found" />
                </div>

                <div className='div-category'>
                    <Typography variant='h3'
                        textAlign="center"
                        fontWeight="800"
                        border="3px dashed white"
                        marginTop="2rem"
                        borderRadius="10px"
                        padding="10px"
                        boxShadow="0 0 5px 2px grey"
                    >
                        {props.data[0].strArea}</Typography>
                </div>

                <div className="para-div">
                    <p>
                        {props.data[0].strInstructions}
                    </p>
                </div>

                <Typography variant='h4' fontWeight='800' textAlign='center'>Ingredients</Typography>
                <div className="ingredients-div">
                    {props.data.map((val) => {
                        let count = 1;
                        for (let i in val) {
                            if (i === `strIngredient${count}` && val[i]) {
                                ingradients.push(val[i]);
                                count++;
                            }
                        }

                    })}
                    {
                        ingradients.map((item) => {
                            {/* return <div className='span-div'><span>{item}</span></div> */ }
                            return <span className='span-ingradiant'>{item}</span>
                        })
                    }
                </div>

            </Container >
        </div >
    )
}

export default ShuffleItem
