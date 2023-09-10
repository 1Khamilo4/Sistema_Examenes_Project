package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Services.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/examenes")
@CrossOrigin("http://localhost:4200/")
public class ExamenController {

    @Autowired
    private ExamenService examenService;

    @PostMapping("/")
    public ResponseEntity<Examen> post_guardarExamen(@RequestBody Examen examen){
        Examen examenGuardado = examenService.post_crearExamen(examen);

        return ResponseEntity.ok(examenGuardado);
    }

    @GetMapping("/{examenId}")
    public Examen get_listarExamenById(@PathVariable("examenId") Long examenId) throws Exception{
        return examenService.get_listarExamenById(examenId);
    }

    @GetMapping("/")
    public ResponseEntity<?> get_listarExamenes(){
        return ResponseEntity.ok(examenService.get_listarExamenes());
    }

    @PutMapping("/{examenId}")
    public Examen put_actualizarExamen(@PathVariable("examenId") Long examenId,@RequestBody Examen examen) throws Exception{
        return examenService.put_actualizarExamen(examenId,examen);
    }

    @DeleteMapping("/{examenId}")
    public void del_eliminarExamen(@PathVariable("examenId") Long examenId) throws Exception{
        examenService.del_eliminarExamen(examenId);
    }

}
