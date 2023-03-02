CREATE TABLE IF NOT EXISTS user_model (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      type VARCHAR(10) NOT NULL,
      cpf VARCHAR(14) NOT NULL,
      birth DATE NOT NULL,
      phone VARCHAR(20) NOT NULL,
      reputation DOUBLE PRECISION NOT NULL,
      key_pix VARCHAR(50),
      user_photo BYTEA,
      document_photo BYTEA
);

ALTER TABLE ONLY public.user_model
    ADD CONSTRAINT uk_la8xty622mpbfdhq2iixt9lhu UNIQUE (email);
