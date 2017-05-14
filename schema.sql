CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
	id INTEGER AUTO_INCREMENT NOT NULL,
    item_id VARCHAR(5) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
	PRIMARY KEY (id)
);


INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (13555,"silver","precious_metals",16.49,2300);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (13458,"gold","precious_metals",1230.30,503);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (57481,"bitcoin","digital_currency",1777.98,10350);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (57484,"Ethereum","digital_currency",90.99,8350);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (04551,"USD","fiat_currency",1,50410);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (28880,"Yen","fiat_currency",113.37,140856);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (22320,"Renminbi","fiat_currency",6.90,66550);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (22010,"Canadian_Dollar","fiat_currency",1.37,66550);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (26220,"Brazilian_Real","fiat_currency",3.12,13800);

INSERT INTO products (item_id,product_name,department_name,price,stock_quantity)
VALUES (26544,"Euro","fiat_currency",0.91,48652);

SELECT * FROM products;



