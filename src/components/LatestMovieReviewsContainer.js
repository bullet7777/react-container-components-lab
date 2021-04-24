import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SX8CqFVej2VCzohRmBR7Bz7iWCtQhQ7m';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state={
            reviews:[]
            

        }
    }

    componentDidMount() {
        fetch(URL)
        .then(response =>response.json())
        .then(info => {
            console.log(info)
            this.setState({
                reviews:info.results
            })
    
        })
    }

    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
