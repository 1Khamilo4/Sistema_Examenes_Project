package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Rol;
import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Models.UsuarioRol;
import com.sistema.examenes.Respositories.UsuarioRepository;
import com.sistema.examenes.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("http://localhost:4200/")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private UsuarioRepository usuarioRepository;

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

    @PutMapping("/{usuario_id}")
    public Usuario actualizarUsuario(@PathVariable("usuario_id") Long usuario_id, @RequestBody Usuario usuario) throws Exception{
        return usuarioService.put_actualizarUsuario(usuario_id, usuario);
    }

    @GetMapping("/")
    public ResponseEntity<?> obtenerUsuarios(){
        Set<Usuario> usuario = usuarioService.get_obtenerUsuarios();
        Set<Usuario> usuarios = new HashSet<>();
        usuario.forEach(user -> {
            if(user.isEnabled()){
                usuarios.add(user);
            }
        });
        return ResponseEntity.ok(usuarios);
        //return ResponseEntity.ok(usuarioService.get_obtenerUsuarios());
    }

    @GetMapping("/{username}")
    public Usuario obtenerUsuarioByUsername(@PathVariable("username") String username){
        return usuarioService.get_obtenerUsuarioByUserName(username);
    }
    @GetMapping("/{user_id}")
    public Usuario obtenerUsuarioById(@PathVariable("user_id") Long user_id) throws Exception{
        return usuarioService.get_obtenerUsuarioById(user_id);
    }



    @DeleteMapping("/{usuarioId}")
    public Usuario eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) throws Exception {

        Usuario usuario_del = usuarioService.get_obtenerUsuarioById(usuarioId);

        usuario_del.setEnabled(false);

         usuarioRepository.save(usuario_del);

        return usuario_del;
        //usuarioService.del_eliminarUsuario(usuarioId);
        //  return usuarioService.put_actualizarUsuario(usuario_id, usuario);
    }
}
