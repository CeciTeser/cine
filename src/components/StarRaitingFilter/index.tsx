import { FC, useState, SetStateAction, Dispatch } from 'react';

import { FaStar } from 'react-icons/fa'

import './styles.scss'

type Props ={
    stars: number,
    raiting: number, 
    setRaiting: Dispatch<SetStateAction<number>>,
}

const StarRatingFilter:FC <Props>  = ({ stars, raiting , setRaiting } ) =>{
     
    const [hover, setHover] = useState(0)


    return (
        <div className='container my-5 d-flex align-items-center justify-content-center mt-5'>
            
            <div className='d-flex flex-row align-items-center justify-content-center star-filter'>
                
                <h5 className='me-4'>You can filter by</h5>

                {[...Array(5)].map((star, i )=> {

                    const ratingValue = i + 1; 
                
                    return (

                            <label>
                                <input 
                                    type="radio" 
                                    name="rating" 
                                    value={ratingValue} 
                                    onClick={()=>setRaiting(ratingValue)} 
                                
                                />
                                <FaStar 
                                    className="star" 
                                    color={ratingValue <= (hover || raiting)? '#ffc107': '#e4e5e9'} 
                                    size={30} 
                                    onMouseEnter={()=>setHover(ratingValue)}
                                    onMouseOut={()=>setHover(0)}
                                />
                            </label>
                            
                    )
                })}
                <button onClick={()=>setRaiting(0)} >Restore star filter</button>
            </div>
        </div>
    );

}


 export {StarRatingFilter}