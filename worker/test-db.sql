CREATE TABLE IF NOT EXISTS test_users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);


INSERT INTO test_users (name, email) VALUES ('Alice Smith', 'alice@ucdavis.edu');
INSERT INTO test_users (name, email) VALUES ('Bob Smith', 'bob@ucdavis.edu');
INSERT INTO test_users (name, email) VALUES ('Justin Merz', 'jrmerz@ucdavis.edu');
INSERT INTO test_users (name, email) VALUES ('Quinn Hart', 'qjhart@ucdavis.edu');
INSERT INTO test_users (name, email) VALUES ('Roger Kunkel', 'rakunkel@ucdavis.edu');