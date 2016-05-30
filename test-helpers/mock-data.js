/* jshint -W079 */
var mockData = (function () {
    return {
        getMockLayout: getMockLayout,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'app/home/home.html',
                    title: 'home',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-home"></i> Home'
                    }
                }
            }
        ];
    }

    function getMockLayout() {
        return {
            Search: [
                {
                    Title: "Star Wars: Episode IV - A New Hope",
                    Year: "1977",
                    imdbID: "tt0076759",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode V - The Empire Strikes Back",
                    Year: "1980",
                    imdbID: "tt0080684",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode VI - Return of the Jedi",
                    Year: "1983",
                    imdbID: "tt0086190",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode VII - The Force Awakens",
                    Year: "2015",
                    imdbID: "tt2488496",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode I - The Phantom Menace",
                    Year: "1999",
                    imdbID: "tt0120915",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode III - Revenge of the Sith",
                    Year: "2005",
                    imdbID: "tt0121766",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Episode II - Attack of the Clones",
                    Year: "2002",
                    imdbID: "tt0121765",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: The Clone Wars",
                    Year: "2008",
                    imdbID: "tt1185834",
                    Type: "movie",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTI1MDIwMTczOV5BMl5BanBnXkFtZTcwNTI4MDE3MQ@@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: The Clone Wars",
                    Year: "2008\u20132015",
                    imdbID: "tt0458290",
                    Type: "series",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMTM0NjQ2Mjk0OV5BMl5BanBnXkFtZTcwODQ3Njc3Mg@@._V1_SX300.jpg"
                },
                {
                    Title: "Star Wars: Clone Wars",
                    Year: "2003\u20132005",
                    imdbID: "tt0361243",
                    Type: "series",
                    Poster: "http:\/\/ia.media-imdb.com\/images\/M\/MV5BMjE2Mjk5Mzk3M15BMl5BanBnXkFtZTcwMDkzMTIzMQ@@._V1_SX300.jpg"
                }
            ],
            totalResults: "329",
            Response: "True"
        };
    }
})();