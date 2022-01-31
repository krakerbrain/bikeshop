--d.- Se requiere un reporte con la cantidad de inventario de productos por marca, ordenado descendentemente

SELECT br.brand_id, br.brand_name, SUM(s.quantity) FROM brands br
INNER JOIN products pr ON pr.brand_id = br.brand_id
INNER JOIN stocks s ON s.product_id = pr.product_id
GROUP BY  br.brand_id, br.brand_name
ORDER BY SUM DESC