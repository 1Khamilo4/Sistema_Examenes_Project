package com.sistema.examenes.Services.Impl;

import com.sistema.examenes.Models.Categoria;
import com.sistema.examenes.Respositories.CategoriaRepository;
import com.sistema.examenes.Services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoriaServiceImpl implements CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Override
    public Categoria post_agregarCategoria(Categoria categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public Categoria put_actualizarCategoria(Long categoriaId, Categoria categoria) throws Exception {

        Optional<Categoria> categoriaOptional = categoriaRepository.findById(categoriaId);

        if(!categoriaOptional.isPresent()){
            throw new Exception("No exite Categoria");
        }

        categoria.setCategoriaId(categoriaOptional.get().getCategoriaId());

        return categoriaRepository.save(categoria);

    }

    @Override
    public Set<Categoria> get_listarCategorias() {
        return new LinkedHashSet<>(categoriaRepository.findAll());
    }

    @Override
    public Categoria get_listarCategoriaById(Long categoriaId) throws Exception {
        Optional<Categoria> categoria = categoriaRepository.findById(categoriaId);

        if(!categoria.isPresent()){
            throw new Exception("No exite Categoria");
        }
        return categoria.get();
    }

    @Override
    public void del_eliminarCategoria(Long categoriaId) throws Exception {

        Optional<Categoria> categoria = categoriaRepository.findById(categoriaId);

        if(!categoria.isPresent()){
            throw new Exception("No exite Categoria");
        }

        categoriaRepository.delete(categoria.get());
    }
}
