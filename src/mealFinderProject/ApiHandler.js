import { useEffect, useState } from 'react'
import SingleItem from './SingleItem';

function ApiCall(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fech() {
            return await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.keywords}`)
        }
        const result = fech();
        result.then((response) => {
            return response.ok ? response.json() : new Error('Fetch Error is');
        }).then((val) => {
            setData(val.meals);
        }).catch((err) => {
            console.log("error occur ", err);
        })
    }, [props.keywords])

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: " auto auto auto auto",
        }}>
            {(data) && data.map((item) => {
                return <SingleItem key={item.idMeal} meals={data} image={item.strMealThumb} itemName={item.strMeal} />
            })}
        </div >
    )
}
export default ApiCall;