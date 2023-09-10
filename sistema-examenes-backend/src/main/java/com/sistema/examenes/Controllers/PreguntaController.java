package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Examen;
import com.sistema.examenes.Models.Pregunta;
import com.sistema.examenes.Services.ExamenService;
import com.sistema.examenes.Services.PreguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/preguntas")
@CrossOrigin("http://localhost:4200/")
public class PreguntaController {

    @Autowired
    private PreguntaService preguntaService;

    @Autowired
    private ExamenService examenService;

    @PostMapping("/")
    public ResponseEntity<Pregunta> post_guardarPregunta(@RequestBody Pregunta pregunta){
        Pregunta preguntaGuardada = preguntaService.post_crearPregunta(pregunta);

        return ResponseEntity.ok(preguntaGuardada);
    }

    @PutMapping("/{preguntaId}")
    public Pregunta put_actualizarPregunta(@PathVariable("preguntaId") Long preguntaId, @RequestBody Pregunta pregunta) throws Exception{
        return preguntaService.put_actulizarPregunta(preguntaId, pregunta);
    }

    @GetMapping("/examen/{examenId}")
    public ResponseEntity<?> get_listarPreguntasDelExamen(@PathVariable("examenId") Long examenId)throws Exception{

        Examen examen = examenService.get_listarExamenById(examenId);//Obtengo el obj del examen con examenId

        Set<Pregunta> preguntas = examen.getPreguntas();
        List examenes = new ArrayList(preguntas);//en este arreglo guardo las preguntas que obtengo en examen.getPreguntas();

        if(examenes.size() > Integer.parseInt(examen.getNumeroDePreguntas())){
            examenes = examenes.subList(0, Integer.parseInt(examen.getNumeroDePreguntas()+1)); //Desde - hasta
        }

        Collections.shuffle(examenes);
        return ResponseEntity.ok(examenes);

    }

    @GetMapping("/")
    public ResponseEntity<?> get_listarPregunta(){
        return  ResponseEntity.ok(preguntaService.get_obtenerPreguntas());
    }

    @GetMapping("/{preguntaId}")
    public Pregunta get_listarPreguntaById(@PathVariable("preguntaId") Long preguntaId) throws Exception{
        return preguntaService.get_obtenerPregunta(preguntaId);
    }

    @DeleteMapping("/{preguntaId}")
    public void del_eliminarPreguntaByID(@PathVariable("preguntaId") Long preguntaId) throws Exception{
        preguntaService.del_eliminarPregunta(preguntaId);
    }
}
