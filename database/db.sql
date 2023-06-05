CREATE DATABASE dbrent

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) UNIQUE,
    pass VARCHAR(255),
    rol INTEGER
);

CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    birthdate VARCHAR(25),
    telephone VARCHAR(25),
    id_user INTEGER
);

CREATE TABLE movie(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    synopsis VARCHAR(255),
    categorie VARCHAR(100),
    imagen VARCHAR(255),
    stock INTEGER,
    n_like INTEGER,
    sale_price FLOAT,
    sale_rent FLOAT
);

CREATE TABLE rent(
    id SERIAL PRIMARY KEY,
    date_rent VARCHAR(100),
    date_return VARCHAR(100),
    price FLOAT,
    amount INTEGER,
    payment VARCHAR(100),
    total FLOAT,
    id_movie INTEGER,
    id_cliente INTEGER
);

CREATE TABLE buy(
    id SERIAL PRIMARY KEY,
    date_buy VARCHAR(100),
    price FLOAT,
    amount INTEGER,
    payment VARCHAR(100),
    total FLOAT,
    id_movie INTEGER,
    id_cliente INTEGER
);