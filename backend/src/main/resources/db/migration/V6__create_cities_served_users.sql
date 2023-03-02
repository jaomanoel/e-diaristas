CREATE TABLE IF NOT EXISTS cities_served_users (
  user_id INTEGER NOT NULL REFERENCES user_model(id),
  city_served_id INTEGER NOT NULL REFERENCES cities_served(id),
  PRIMARY KEY (user_id, city_served_id)
);