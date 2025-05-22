try {
  // Primeiro, verifique se o usuário já existe
  const checkUser = await db.query(
    'SELECT id FROM usuarios WHERE id_clerk = $1',
    [userId]
  );
  
  if (checkUser.rows.length === 0) {
    // Usuário não existe, então insira
    await db.query(
      'INSERT INTO usuarios (id_clerk, nome, email) VALUES ($1, $2, $3)',
      [userId, userName, userEmail]
    );
    console.log('Usuário inserido com sucesso');
  } else {
    console.log('Usuário já existe, pulando inserção');
  }
} catch (error) {
  console.error('Erro ao verificar/inserir usuário:', error);
  // Não deixe o erro interromper o fluxo da aplicação
} 