DROP TABLE IF EXISTS dropzone CASCADE;

CREATE TABLE dropzone (
  id SERIAL PRIMARY KEY NOT NULL,
  dropzone VARCHAR(100) NOT NULL,
  image VARCHAR(100) NOT NULL
);