CREATE TABLE IF NOT EXISTS projects (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(100) NOT NULL,
  status   VARCHAR(20)  NOT NULL DEFAULT 'active',
  progress INTEGER      NOT NULL DEFAULT 0
);

INSERT INTO projects (name, status, progress) VALUES
  ('Office Tower A', 'active',   72),
  ('Warehouse B',    'active',   45),
  ('Car Park C',     'complete', 100),
  ('Data Centre D',  'active',   18);
