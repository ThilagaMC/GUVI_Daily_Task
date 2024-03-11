class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

     getPG(movies) {
        let pgMovies = [];
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].rating === "PG") {
                pgMovies.push(movies[i]);
            }
        }
        return pgMovies();
    
    }
}
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");


