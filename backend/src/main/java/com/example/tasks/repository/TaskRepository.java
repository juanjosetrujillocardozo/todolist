package com.example.tasks.repository;

import com.example.tasks.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    // Puedes agregar consultas personalizadas aquí si es necesario
}
