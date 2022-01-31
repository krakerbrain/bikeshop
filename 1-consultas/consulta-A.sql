-- a.- Se requiere un listado de productos con sus precios, 
--de aquellos productos cuyo modelo es 2016, ordenado alfabéticamente por nombre. 


SELECT product_id, product_name, model_year, list_price 
FROM products 
ORDER BY product_name;