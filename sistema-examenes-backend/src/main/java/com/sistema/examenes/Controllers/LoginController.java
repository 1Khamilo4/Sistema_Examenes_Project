package com.sistema.examenes.Controllers;

import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Services.LoginService;
import com.sistema.examenes.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin
public class LoginController {

    @Autowired
    private LoginService loginService;
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/")
    public Usuario authUsuario(@RequestBody Usuario usuario ) throws Exception {
       Usuario usuario_valid =  loginService.get_obtenerUsuarioByUserName(usuario.getUsername());

       if(usuario.getPassword().equals(usuario_valid.getPassword())){
           return usuario_valid;
       }else{
           throw new Exception("Login no valido");
       }


    }

    @PutMapping("/{username}/{password}")
    public Usuario changePassword(@PathVariable("username") String username, @PathVariable("password") String password)throws Exception{

        Usuario usuario_pass = loginService.get_obtenerUsuarioByUserName(username);

        usuario_pass.setPassword(password);

        usuarioService.put_actualizarUsuario(usuario_pass.getId(), usuario_pass);

        return  usuario_pass;
    }
}
