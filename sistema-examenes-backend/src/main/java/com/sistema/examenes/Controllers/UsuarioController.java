package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Rol;
import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Models.UsuarioRol;
import com.sistema.examenes.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("http://localhost:4200/")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception{
        usuario.setPerfil("default.png");

        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setRolNombre("NORMAL");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
        return usuarioService.post_guardarUsuario(usuario,usuarioRoles);
    }

    @GetMapping("/")
    public ResponseEntity<?> obtenerUsuarios(){
        return ResponseEntity.ok(usuarioService.get_obtenerUsuarios());
    }

    @GetMapping("/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username){
        return usuarioService.get_obtenerUsuarioByUserName(username);
    }
    @GetMapping("/{user_id}")
    public Usuario obtenerUsuario(@PathVariable("user_id") Long user_id) throws Exception{
        return usuarioService.get_obtenerUsuarioById(user_id);
    }



    @DeleteMapping("/{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) throws Exception {
        usuarioService.del_eliminarUsuario(usuarioId);
    }
}
