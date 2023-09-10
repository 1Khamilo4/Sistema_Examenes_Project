package com.sistema.examenes.Services.Impl;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Models.Pregunta;
import com.sistema.examenes.Respositories.PreguntaRepository;
import com.sistema.examenes.Services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class PregutaServiceImpl implements PreguntaService {

    @Autowired
    PreguntaRepository preguntaRepository;

    @Override
    public Pregunta post_crearPregunta(Pregunta pregunta) {
        return preguntaRepository.save(pregunta);
    }

    @Override
    public Pregunta put_actulizarPregunta(Long pregunta_id, Pregunta pregunta) throws Exception{

        Optional<Pregunta> preguntaOptional = preguntaRepository.findById(pregunta_id);

        if(!preguntaOptional.isPresent()){
            throw new Exception("No existe Pregunta");
        }

        pregunta.setPreguntaId( preguntaOptional.get().getPreguntaId());

        return preguntaRepository.save(pregunta);
    }

    @Override
    public Set<Pregunta> get_obtenerPreguntas() {
        return new LinkedHashSet<>(preguntaRepository.findAll());
    }

    @Override
    public Pregunta get_obtenerPregunta(Long preguntaId) throws Exception {

        Optional<Pregunta> pregunta = preguntaRepository.findById(preguntaId);

        if(!pregunta.isPresent()){
            throw new Exception("No existe Pregunta");
        }

        return pregunta.get();
    }

    @Override
    public Set<Pregunta> get_obtenerPreguntasDelExamen(Examen examen) {
        return preguntaRepository.findByExamen(examen);
    }

    @Override
    public void del_eliminarPregunta(Long preguntaId) throws Exception {

        Optional<Pregunta> pregunta = preguntaRepository.findById(preguntaId);

        if(!pregunta.isPresent()){
            throw new Exception("No existe Pregunta");
        }

       preguntaRepository.delete(pregunta.get());
    }
}
