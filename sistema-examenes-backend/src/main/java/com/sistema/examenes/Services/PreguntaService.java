package com.sistema.examenes.Services;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Models.Pregunta;

import java.util.Set;

public interface PreguntaService {

    Pregunta post_crearPregunta(Pregunta pregunta);
    Pregunta put_actulizarPregunta(Long pregunta_id, Pregunta pregunta) throws Exception;
    Set<Pregunta> get_obtenerPreguntas();
    Pregunta get_obtenerPregunta(Long preguntaId) throws Exception;
    Set<Pregunta> get_obtenerPreguntasDelExamen(Examen examen);
    void del_eliminarPregunta(Long preguntaId) throws Exception;
}
