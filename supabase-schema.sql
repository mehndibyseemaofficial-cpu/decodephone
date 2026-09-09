CREATE TABLE phones (
  id SERIAL PRIMARY KEY,
  name TEXT,
  brand TEXT,
  price INT,
  score INT,
  tag TEXT,
  image_url TEXT,
  ram TEXT,
  storage TEXT,
  processor TEXT,
  battery TEXT,
  camera TEXT,
  antutu INT
);

CREATE TABLE price_history (
  id SERIAL PRIMARY KEY,
  phone_id INT REFERENCES phones(id),
  price INT,
  date DATE,
  source TEXT
);

INSERT INTO phones (name, brand, price, score, tag, image_url, ram, storage, processor, battery, camera, antutu) VALUES
('Samsung Galaxy A37 5G', 'Samsung', 38999, 84, 'Best Display', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', '8 GB', '128 GB', 'Exynos 1580', '5000 mAh', '50 MP + 12 MP', 740000),
('Samsung Galaxy A57 5G', 'Samsung', 49999, 90, 'Flagship Killer', 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400', '12 GB', '256 GB', 'Exynos 1580', '5000 mAh', '50 MP + 12 MP', 820000);
