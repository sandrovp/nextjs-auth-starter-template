// Importe os módulos necessários
import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Ajuste o caminho conforme necessário
import { auth } from '@clerk/nextjs';

// Função para lidar com requisições GET
export async function GET() {
  try {
    const { userId, sessionId } = auth();
    
    // Verificar se o usuário está autenticado
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }
    
    // Buscar dados do usuário
    const userData = await db.query('SELECT * FROM usuarios WHERE id_clerk = $1', [userId]);
    
    return NextResponse.json({ 
      user: userData.rows[0] || null,
      message: 'Dados do dashboard' 
    });
  } catch (error) {
    console.error('Erro ao acessar o dashboard:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}

// Função para lidar com requisições POST
export async function POST() {
  try {
    const { userId } = auth();
    const userInfo = await clerkClient.users.getUser(userId);
    const userName = userInfo.firstName + ' ' + userInfo.lastName;
    const userEmail = userInfo.emailAddresses[0].emailAddress;
    
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
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao verificar/inserir usuário:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
} 