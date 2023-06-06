const db = require ('../db');

const allMovies = ({  }) => {
    return db.query("SELECT * FROM movie");
};

const findOne = ({ id }) => {
    return db.query(
        "SELECT title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent, eliminate" +
        "FROM movie WHERE eliminate = FALSE", [+id]);
};

const save = async ({ title, synopsis, categorie, image, stock, n_like, sale_price, sale_rent }) => {
    return db.query(
        "INSERT INTO movie (title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [ title, synopsis, categorie, image, stock, n_like, sale_price, sale_rent ]
        );
};

const update = async ({ title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent, id }) => {
    return db.query(
        "UPDATE movie SET title=$1, synopsis=$2, categorie=$3, imagen=$4, stock=$5, n_like=$6, sale_price=$7, sale_rent=$8 where id=$9 RETURNING *", 
        [ title, synopsis, categorie, imagen, stock, n_like, sale_price, sale_rent, id ]
        );
   
};

const deleteU = ({ id }) => {
    return db.query(
        "UPDATE users SET eliminate=true WHERE id=$1 RETURNING *", [+id]);
}

module.exports = {
    allMovies,
    findOne,
    save,
    update
}