package com.sistema.examenes;

import com.sistema.examenes.Models.Rol;
import com.sistema.examenes.Models.Usuario;
import com.sistema.examenes.Models.UsuarioRol;
import com.sistema.examenes.Services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;


	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*Usuario usuario = new Usuario();
		usuario.setNombre("Pavo");
		usuario.setApellido("Ortiz");
		usuario.setUsername("phavo");
		usuario.setPassword("123456");
		usuario.setEmail("p@gmail.com");
		usuario.setTelefono("93654684");
		usuario.setPerfil("foto.png");

		Rol rol = new Rol();
		rol.setRolId(1L);
		rol.setRolNombre("ADMIN");

		Set<UsuarioRol> usuarioRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();

		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);

		usuarioRoles.add(usuarioRol);

		Usuario usuarioGuardado = usuarioService.post_guardarUsuario(usuario, usuarioRoles);
		System.out.println(usuarioGuardado.getUsername());*/
	}
}
