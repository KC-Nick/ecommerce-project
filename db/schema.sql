-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

CREATE TABLE category (
  catID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- varchar, other options?
  category_name VARCHAR(50) NOT NULL
);

CREATE TABLE product (
    proID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(200) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT '10' CHECK (ISNUMERIC(stock) = 1)
    category_id INT
    FOREIGN KEY (category_id) REFERENCES category(catID),
    ON DELETE CASCADE
);

CREATE TABLE tag (
    tagID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(100) NOT NULL
);

CREATE TABLE productTag (
    proTagID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT
    FOREIGN KEY (proTagID) REFERENCES product(proID),
    tag_id INT
    FOREIGN KEY (tag_id) REFERENCES tag(tagID)
);