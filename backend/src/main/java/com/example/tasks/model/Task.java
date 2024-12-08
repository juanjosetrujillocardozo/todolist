package com.example.tasks.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Size(max = 255, message = "Title cannot exceed 255 characters")
    private String title;

    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;

    private boolean completed;

    @Column(name = "created_at", nullable = false, updatable = false)
    private String createdAt;

    @Column(name = "updated_at")
    private String updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = java.time.LocalDateTime.now().toString();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = java.time.LocalDateTime.now().toString();
    }
}
