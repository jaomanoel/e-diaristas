CREATE TABLE IF NOT EXISTS cities_served (
      id SERIAL PRIMARY KEY,
      ibge_code VARCHAR(20) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(2) NOT NULL
);