import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'SX8CqFVej2VCzohRmBR7Bz7iWCtQhQ7m';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm:'',reviews:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({searchTerm: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();

        fetch(URL+`&query=${this.state.searchTerm}`)
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
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    searchTerm
                    <input value={this.state.searchTerm} onChange={this.handleChange} />
                </label>
                <input type="submit" value="searchTerm" />
      </form>
      <div className='searchable-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
            </div>
        )
    }
}
