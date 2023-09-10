package com.sistema.examenes.Respositories;

import com.sistema.examenes.Models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}
