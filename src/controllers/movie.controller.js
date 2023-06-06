const movieService = require ('../service/movie.service');

const findAllMovie = async (req, res) =>{

    try {
        const result = await movieService.allMovies({ });

        res.json(result.rows);
    } catch (error) {
        return error;
    }
};

const findOneMovie = async(req, res) => {
    const { id } = req.params;
    try {
        const resultOne = await movieService.findOne({ id });
        console.log(resultOne);
        return res.json(resultOne.rows[0]);
    } catch (error) {
        console.log(error);
            return res.status(500).json(error.message)
    }
};

const createMovie = async (req, res) => {
    const { title, synopsis, categorie, image, stock, n_like, sale_price, sale_rent } = req.body;


    try {
        const resultMovie = await movieService.save({ title, synopsis, categorie, image, stock, n_like, sale_price, sale_rent});

         res.json(resultMovie.rows[0]);
    } catch (error) {
        console.log(error);
            return res.status(500).json(error.message);
    }
};

const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent } = req.body;

    try {
        const result = await movieService.findOne({ id });
        await movieService.update({ title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent, id });
        

         return res.json(result.rows[0]);
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }

}

module.exports= {
    findAllMovie,
    findOneMovie,
    createMovie,
    updateMovie
}