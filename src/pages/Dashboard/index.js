import React, { useEffect, useState, useMemo, useCallback } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { 
  Title, 
  Resumo, 
  ResumoTextAllConcluded, 
  ResumoText, 
  ResumoTextParagraph, 
  ResumoTextParagraphBold,
  LogoutButton,
  LogoutButtonText
} from './styles';

const Dashboard = () => {
  const { signOut } = useAuth();

  const [tasks, setTasks] = useState([]);

  const tasks_qtd = useMemo(() => tasks.length, [tasks]);

  const tasks_concluded_qtd = useMemo(
    () => {
      const filtered = tasks.filter(task => {
        return task.concluido === true;
      })

      return filtered.length;
    },
    [tasks],
  )

  const loadTasks = useCallback(
    async () => {
      const response = await api.get(`tarefas`);
      setTasks(response.data);
    },[],
  );

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <>
      <Title>Resumo</Title>

      <Resumo>
        { tasks_qtd - tasks_concluded_qtd === 0 ? 
          <ResumoTextAllConcluded>Parabéns! Você concluiu todas as tarefas!</ResumoTextAllConcluded>
        :
          <ResumoText>Existem {tasks_qtd - tasks_concluded_qtd} tarefas pendentes.</ResumoText>
        }
        <ResumoTextParagraph><ResumoTextParagraphBold>Total de tarefas:</ResumoTextParagraphBold> {tasks_qtd}</ResumoTextParagraph>
        <ResumoTextParagraph><ResumoTextParagraphBold>Tarefas concluídas:</ResumoTextParagraphBold> {tasks_concluded_qtd}</ResumoTextParagraph>
      
        <LogoutButton onPress={() => signOut()}>
          <LogoutButtonText>
            Sair
          </LogoutButtonText>
        </LogoutButton>
      </Resumo>
    </>
  )
}

export default Dashboard;