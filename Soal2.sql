SELECT a.id, a.name, b.id, b.name as parent_name
FROM UsersData a // Contoh mengambil dari tabel UsersData
LEFT JOIN UsersData b ON a.parent_id = b.id