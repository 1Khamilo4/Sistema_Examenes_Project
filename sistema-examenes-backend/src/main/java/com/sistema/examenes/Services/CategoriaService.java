package com.sistema.examenes.Services;

import com.sistema.examenes.Models.Categoria;

import java.util.Set;

public interface CategoriaService {

    Categoria post_agregarCategoria(Categoria categoria);
    Categoria put_actualizarCategoria(Long categoriaId, Categoria categoria) throws Exception;
    Set<Categoria> get_listarCategorias();
    Categoria get_listarCategoriaById(Long categoriaId) throws Exception;
    void del_eliminarCategoria(Long categoriaId) throws Exception;
}
