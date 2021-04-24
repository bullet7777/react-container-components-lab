// Code MovieReviews Here
import React, { Component } from 'react'


const MovieReviews=({reviews})=>{
    return(
        <div className='review-list'>
        {
            reviews.map((obj)=>{
                return (<div className='review'><h1>{obj.display_title}</h1></div>)
            })
        }
        
    </div>
    )

}

export default MovieReviews