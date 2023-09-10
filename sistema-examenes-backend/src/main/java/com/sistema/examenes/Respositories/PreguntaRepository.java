package com.sistema.examenes.Respositories;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Models.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PreguntaRepository extends JpaRepository<Pregunta, Long> {

    Set<Pregunta> findExamen(Examen examen);//Buscar preguntas de un examen
}
