package com.sistema.examenes.Services.Impl;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Respositories.ExamenRepository;
import com.sistema.examenes.Services.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class ExamenServiceImpl implements ExamenService {

    @Autowired
    ExamenRepository examenRepository;

    @Override
    public Examen post_crearExamen(Examen examen) {
        return examenRepository.save(examen);
    }

    @Override
    public Examen put_actualizarExamne(Long examenId, Examen examen) throws Exception {
        Optional<Examen> examenOptional = examenRepository.findById(examenId);

        if(!examenOptional.isPresent()){
            throw new Exception("No existe Examen");
        }

        examen.setExamenId(examenOptional.get().getExamenId());

        return examenRepository.save(examen);
    }

    @Override
    public Set<Examen> get_listarExamenes() {
        return new LinkedHashSet<>(examenRepository.findAll());
    }

    @Override
    public Examen get_listarExamenById(Long examenId) throws Exception {
        Optional<Examen> examen = examenRepository.findById(examenId);

        if(!examen.isPresent()){
            throw new Exception("No existe Examen");
        }

        return examen.get();
    }

    @Override
    public void del_eliminarExamen(Long examenId) throws Exception {
        Optional<Examen> examen = examenRepository.findById(examenId);

        if(!examen.isPresent()){
            throw new Exception("No existe Examen");
        }

        examenRepository.delete(examen.get());
    }
}
