// Antes de inserir um novo usuário, verifique se ele já existe
const usuarioExistente = await db.query(
  'SELECT * FROM usuarios WHERE id_clerk = $1',
  [userId]
);

// Se o usuário não existir, então insira
if (usuarioExistente.rows.length === 0) {
  await db.query(
    'INSERT INTO usuarios (id_clerk, nome, email) VALUES ($1, $2, $3) ON CONFLICT (id_clerk) DO NOTHING',
    [userId, userName, userEmail]
  );
} 