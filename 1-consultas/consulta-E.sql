--e.- Se requiere un inventario para la tienda Santa Cruz Bike de los productos que tienen en existencia en la categoría Electric Bikes.

SELECT pr.product_id, pr.product_name, s.quantity FROM products pr
INNER JOIN stocks s ON s.product_id = pr.product_id
INNER JOIN stores st ON st.store_id = s.store_id
INNER JOIN categories ct ON ct.category_id = pr.category_id
WHERE st.store_name = 'Santa Cruz Bikes'
AND ct.category_name = 'Electric Bikes'
ORDER BY pr.product_name;
