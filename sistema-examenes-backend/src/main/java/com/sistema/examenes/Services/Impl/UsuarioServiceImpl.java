package com.sistema.examenes.Services.Impl;


import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Models.UsuarioRol;
import com.sistema.examenes.Respositories.RolRepository;
import com.sistema.examenes.Respositories.UsuarioRepository;
import com.sistema.examenes.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    RolRepository rolRepository;

    @Override
    public Usuario post_guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {

        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());

        if(usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new Exception("El usuario ya existe");
        }else{

            for(UsuarioRol usuarioRol : usuarioRoles){
                rolRepository.save(usuarioRol.getRol());
            }

            usuario.getUsuarioRoles().addAll(usuarioRoles);
            usuarioLocal = usuarioRepository.save(usuario);
        }

        return usuarioLocal;
    }

    @Override
    public Usuario put_actualizarUsuario(Long user_id, Usuario up_usuario) throws Exception{

        Optional<Usuario> usuarioOptional = usuarioRepository.findById(user_id);

        if(!usuarioOptional.isPresent()){
            throw new Exception("No existe Usuario");
        }

        up_usuario.setUsername(usuarioOptional.get().getUsername());
        up_usuario.setId(usuarioOptional.get().getId());

        return usuarioRepository.save(up_usuario);


    }

    @Override
    public Usuario get_obtenerUsuarioById(Long username_id) throws Exception{

        Optional<Usuario> usuario = usuarioRepository.findById(username_id);

        if(!usuario.isPresent()){
            throw new Exception("No existe Usuario");
        }

        return usuario.get();
    }

    @Override
    public Usuario get_obtenerUsuarioByUserName(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public Set<Usuario> get_obtenerUsuarios() {
        return new LinkedHashSet<>(usuarioRepository.findAll());
    }

    @Override
    public void del_eliminarUsuario(Long usuarioId) throws Exception{
        Optional<Usuario> usuario = usuarioRepository.findById(usuarioId);

        if(!usuario.isPresent()){
            throw new Exception("No existe Pregunta");
        }

        usuarioRepository.delete(usuario.get());
    }
}
