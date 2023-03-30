import React from 'react';
import data from '../data.json'
import Movie from './Movie';


class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "",
        }

    }

    handleClick = (Title) => {
        this.setState((prevState) => {
            //console.log('prevstate',prevState);
            return {
                active: prevState.active = Title,
            }
        }, () => {
            console.log('inside the click', this.state.active);

        })




    }
    render() {
        let movie = data.find((f) => f.Title === this.state.active);
        console.log('found movie', movie);
        if (movie) {
            return <Movie movie={movie} />
        } else {
            return (
                <main>
                    {
                        data.map((m) => {
                            return (
                                <>
                                    <div className="movie" key={m.imdbID}>
                                        <figure>
                                            <img src={m.Poster} alt="" />
                                        </figure>
                                        <div className="movie-date">
                                            <strong className="movie-name"> Movie: {m.Title}</strong>
                                            <time>Released Date: {m.Released}</time>
                                        </div>
                                        <button className="active-btn" onClick={() => this.handleClick(m.Title)}>More Info</button>
                                    </div>
                                </>
                            )
                        })
                    }
                </main>
            )
        }
    }
}

export default Movies;