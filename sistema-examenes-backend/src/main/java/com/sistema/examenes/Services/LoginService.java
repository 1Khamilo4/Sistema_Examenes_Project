package com.sistema.examenes.Services;

import com.sistema.examenes.Models.Usuario;

public interface LoginService {

    public Usuario get_obtenerUsuarioByUserName(String username) throws Exception;
}
