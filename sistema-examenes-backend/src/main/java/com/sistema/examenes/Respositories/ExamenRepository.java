package com.sistema.examenes.Respositories;

import com.sistema.examenes.Models.Examen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamenRepository extends JpaRepository<Examen, Long> {
}
