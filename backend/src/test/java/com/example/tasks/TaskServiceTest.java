package com.example.tasks;

import com.example.tasks.model.Task;
import com.example.tasks.repository.TaskRepository;
import com.example.tasks.service.TaskService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllTasks() {
        List<Task> tasks = new ArrayList<>();
        tasks.add(new Task("Task 1", "Description 1", false));
        tasks.add(new Task("Task 2", "Description 2", true));

        when(taskRepository.findAll()).thenReturn(tasks);

        List<Task> result = taskService.getAllTasks();

        assertEquals(2, result.size());
        assertEquals("Task 1", result.get(0).getTitle());
        verify(taskRepository, times(1)).findAll();
    }

    @Test
    void testGetTaskById() {
        Long taskId = 1L;
        Task task = new Task("Existing Task", "Existing Description", false);

        when(taskRepository.findById(taskId)).thenReturn(Optional.of(task));

        Task result = taskService.getTaskById(taskId);

        assertNotNull(result);
        assertEquals("Existing Task", result.getTitle());
        verify(taskRepository, times(1)).findById(taskId);
    }

    @Test
    void testCreateTask() {
        Task task = new Task("New Task", "New Description", false);

        when(taskRepository.save(task)).thenReturn(task);

        Task result = taskService.createTask(task);

        assertNotNull(result);
        assertEquals("New Task", result.getTitle());
        verify(taskRepository, times(1)).save(task);
    }

    @Test
    void testUpdateTask() {
        Long taskId = 1L;
        Task existingTask = new Task("Existing Task", "Old Description", false);
        Task updatedTask = new Task("Updated Task", "Updated Description", true);

        when(taskRepository.findById(taskId)).thenReturn(Optional.of(existingTask));
        when(taskRepository.save(existingTask)).thenReturn(updatedTask);

        Task result = taskService.updateTask(taskId, updatedTask);

        assertNotNull(result);
        assertEquals("Updated Task", result.getTitle());
        assertTrue(result.isCompleted());
        verify(taskRepository, times(1)).findById(taskId);
        verify(taskRepository, times(1)).save(existingTask);
    }

    @Test
    void testDeleteTask() {
        Long taskId = 1L;

        when(taskRepository.existsById(taskId)).thenReturn(true);
        doNothing().when(taskRepository).deleteById(taskId);

        boolean result = taskService.deleteTask(taskId);

        assertTrue(result);
        verify(taskRepository, times(1)).existsById(taskId);
        verify(taskRepository, times(1)).deleteById(taskId);
    }
}
