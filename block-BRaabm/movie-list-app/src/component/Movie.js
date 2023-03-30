

function Movie(props) {
    console.log('inside movie', props);
    let m = props.movie;


    return (
        <div className="container">
        
            <span onClick={()=>window.location.reload()} className='home'>Home</span>
          
            <center className="title">
                {m.Title}
            </center>
            <div className="single-movie" key={m.imdbID}>

                <figure className="single-image">
                    <img src={m.Poster} alt={"imag"} />
                </figure>
                <div className="details">
                    <label>Actors: <h3>{m.Actors}</h3></label>
                    <label>Awards: <h3>{m.Awards}</h3></label>
                    <label>Country: <h3>{m.Country}</h3></label>
                    <h3>Director: {m.Director} </h3>
                    <label>Genre: <h3>{m.Genre}</h3></label>
                    <h3>Language: {m.Language} </h3>
                    <h3>MetaScore: {m.Metascore}</h3>
                    <p>Plot: {m.Plot} </p>
                    <h3>Rated: {m.Rated}</h3>
                    <h3>Released: {m.Released}</h3>
                    <h3>Type: {m.Type}</h3>
                    <h3> Writer: {m.Writer}</h3>
                    <h3>Year: {m.Year}</h3>
                    <h3>imdbRating: {m.imdbRating}</h3>
                    <h3>imdbVotes: {m.imdbVotes}</h3>
                </div>
            </div>
            <span className="clips">Some more clips</span>
            <figure className="allImages">

                {
                    m.Images.map((i) => <img src={i} alt={"1"} />)

                }
            </figure>

        </div>

    )
}

export default Movie;