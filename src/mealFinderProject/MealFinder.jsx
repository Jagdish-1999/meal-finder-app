import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Typography } from '@mui/material';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import ApiCall from './ApiHandler';
import './MealFinder.css';
import ShuffleItem from './ShuffleItem';

export default function MealFinder() {
    const [keyword, setKeyword] = useState(undefined);
    const [inputValue, setInputValue] = useState("");
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fech() {
            return await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        }
        const result = fech();
        result.then((response) => {
            return response.ok ? response.json() : new Error('Fetch Error is');
        }).then((val) => {
            // console.log(val.meals)
            setData(val.meals);
        }).catch((err) => {
            console.log("error occur ", err);
        })
    }, [count])


    // console.log("data is ", data[0]);
    return (
        <div>
            <h1 variant='h1' style={{ textAlign: 'center', }}>Meal Finder</h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>

                <input id='input' type="text" autoComplete="on"
                    placeholder='Search for Meal or Keywords'
                    value={inputValue}
                    onChange={(e) => {
                        e.target.value.trim() && setInputValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        setCount(0);
                        setFlag(true);
                        e.key === "Enter" && inputValue && setKeyword(inputValue);
                        e.key === "Enter" && setInputValue("")
                    }}
                    className='input' />

                <label htmlFor='input' className='search-icon'
                    onClick={() => {
                        setCount(0);
                        setFlag(true);
                        inputValue && setKeyword(inputValue);
                        inputValue && setInputValue("")
                    }}>

                    <span ><SearchIcon /></span>
                </label>
                <span className='shuffle-icon'
                    onClick={() => {
                        setFlag(false);
                        setCount(count + 1);
                    }}
                ><ShuffleOutlinedIcon />
                </span>
            </div>

            <div className="searched-text">
                {keyword && <Typography variant='h5' align='center' fontWeight="600">Search results for ' {keyword} ' :</Typography>}
            </div>
            <div className="container-ui">
                <Container  >
                    {(!count && data) ? < ApiCall keywords={keyword} flag={flag} />
                        : <ShuffleItem data={data} />}
                </Container>
            </div>

        </div >
    )
}


// const [history, setHistory] = useState([]);
// {
//     useEffect(() => {
//         setHistory((prev) => {
//             return keyword ? [...prev, keyword] : prev
//         });
//     }, [keyword])
// }