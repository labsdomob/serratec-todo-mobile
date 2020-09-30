import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';

import { 
  Container,
  Title, 
  Tasks, 
  Task,
  ErrorMessage, 
  FormAddNewTask,
  Input, 
  Button,
  ButtonText,
  TaskText,
  TaskActions,
  TaskActionsTwoIcons
} from './styles';

const Tarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadTasks = useCallback(
    async () => {
      const response = await api.get(`tarefas`);
      setTasks(response.data);
    },[],
  );

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleAddTask = useCallback(
    async () => {
      if(newTask === "") {
        setErrorMessage("Digite a tarefa a ser adicionada");
        return;
      }

      setErrorMessage("");

      const params = {
        descricao: newTask,
        concluido: false
      };

      try {
        await api.post(`tarefas`, params);  
        
        loadTasks();
        setNewTask("");
      } catch (error) {
        console.log("error handleAddTask:", error);

        setErrorMessage("Ocorreu um erro ao adicionar tarefa");
      }
    },[loadTasks, newTask],
  );

  const handleTask = useCallback(
    async (task) => {
      const params = {
        ...task,
        concluido: !task.concluido
      }
  
      await api.put(`tarefas/${task.id}`, params);
  
      loadTasks();
    },[loadTasks],
  );

  const removeTask = useCallback(
    async (task) => {
      await api.delete(`tarefas/${task.id}`);

      loadTasks();
    },[loadTasks],
  );

  return (
    <Container>
      <Title>Lista de Tarefas</Title>

      <FormAddNewTask>
        <Input 
          value={newTask}
          onChangeText={text => setNewTask(text)}
          placeholder="Digite a nova tarefa aqui..." 
        />
        <Button onPress={() => handleAddTask()}>
          <ButtonText>
            Criar
          </ButtonText>
        </Button>
      </FormAddNewTask>

      {!!errorMessage &&
        <ErrorMessage>{errorMessage}</ErrorMessage>
      }

      <Tasks>
        { tasks.map(task => (
          <Task key={task.id}>
            <TaskActions>
              <TaskText>{task.descricao}</TaskText>
              {
                task.concluido ?
                  <TaskActionsTwoIcons>
                    {/* <FiDelete size={22} onClick={() => removeTask(task) } style={{marginRight: 10}} />
                    <FiCheckCircle size={22} onClick={() => handleTask(task) } /> */}

                    <MaterialCommunityIcons 
                      name="delete-outline" 
                      color="#000" 
                      size={22} 
                      onPress={() => removeTask(task)}
                    />

                    <MaterialCommunityIcons 
                      name="check-circle-outline" 
                      color="#000" 
                      size={22} 
                      onPress={() => handleTask(task)}
                    />
                  </TaskActionsTwoIcons>
                :
                  <MaterialCommunityIcons 
                    name="circle-outline" 
                    color="#000" 
                    size={22} 
                    onPress={() => handleTask(task)}
                  />
              }
            </TaskActions>
          </Task>
        ))}
        
      </Tasks>
    </Container>
  )
}

export default Tarefas;