package com.sistema.examenes.Services;

import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Models.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario post_guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;
    public Usuario put_actualizarUsuario(Long user_id, Usuario usuario) throws Exception;
    public Usuario get_obtenerUsuarioById(Long username_id) throws Exception;
    public Usuario get_obtenerUsuarioByUserName(String username);
    public Set<Usuario> get_obtenerUsuarios();
    public void del_eliminarUsuario(Long usuarioId) throws Exception;
}
