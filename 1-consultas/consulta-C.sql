-- c.- Se requiere un reporte con la cantidad de productos de cada categoría, ordenado de mayor a menor cantidad.

SELECT ct.category_id, ct.category_name, COUNT(ct.category_id) FROM products pr
INNER JOIN categories ct ON ct.category_id = pr.category_id
GROUP BY ct.category_id
ORDER BY COUNT DESC;