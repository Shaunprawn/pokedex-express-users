CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    num VARCHAR(255),
    img VARCHAR(255),
    weight VARCHAR(255),
    height VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    password_hash VARCHAR(255),
    email VARCHAR(255)
);

