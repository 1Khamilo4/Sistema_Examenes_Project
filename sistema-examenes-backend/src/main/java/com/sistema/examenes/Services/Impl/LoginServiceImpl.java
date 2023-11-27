package com.sistema.examenes.Services.Impl;

import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Respositories.UsuarioRepository;
import com.sistema.examenes.Services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Override
    public Usuario get_obtenerUsuarioByUserName(String username) throws Exception {

        Optional<Usuario> usuario = Optional.ofNullable(usuarioRepository.findByUsername(username));

        if(!usuario.isPresent()){
            throw new Exception("No existe Usuario");
        }

        return usuario.get();
    }
}
