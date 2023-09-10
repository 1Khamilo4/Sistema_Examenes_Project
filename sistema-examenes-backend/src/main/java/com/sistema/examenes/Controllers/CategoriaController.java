package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Categoria;
import com.sistema.examenes.Services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController//es un componente de Spring capaz de recibir peticiones http y responderlas
@RequestMapping("/categorias")
@CrossOrigin("http://localhost:4200/")//Cualquier ruta desde un navegador o cliente pueda acceder al Back 'cors'
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @PostMapping("/")
    public ResponseEntity<Categoria> post_guardarCategoria(@RequestBody Categoria categoria){

        Categoria categoriaSave = categoriaService.post_agregarCategoria(categoria);

        return ResponseEntity.ok(categoriaSave);

    }

    @GetMapping("/{categoriaId}")
    public Categoria get_listarCategoriaById(@PathVariable("categoriaId") Long categoriaId) throws Exception{

        return categoriaService.get_listarCategoriaById(categoriaId);

    }

    @GetMapping("/")
    public ResponseEntity<?> get_listarCategorias()  {
        return ResponseEntity.ok(categoriaService.get_listarCategorias());
    }

    @PutMapping("/{categoriaId}")
    public Categoria put_actualizarCategoria(@PathVariable("categoriaId") Long categoriaId,@RequestBody Categoria categoria) throws Exception{
        return categoriaService.put_actualizarCategoria(categoriaId,categoria);
    }

    @DeleteMapping("/{categoriaId}")
    public void del_eliminarCategoria(@PathVariable("categoriaId") Long categoriaId) throws Exception{
        categoriaService.del_eliminarCategoria(categoriaId);
    }
}
