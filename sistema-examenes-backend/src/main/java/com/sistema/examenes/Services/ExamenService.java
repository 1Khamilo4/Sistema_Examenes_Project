package com.sistema.examenes.Services;

import com.sistema.examenes.Models.Examen;

import java.util.Set;

public interface ExamenService {

    Examen post_crearExamen(Examen examen);
    Examen put_actualizarExamne(Long examenId, Examen examen) throws Exception;
    Set<Examen> get_listarExamenes();
    Examen get_listarExamenById(Long examenId) throws Exception;
    void del_eliminarExamen(Long examenId) throws Exception;
}
