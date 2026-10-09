package com.api.staybill.service;

import com.api.staybill.dto.LoginRequest;
import com.api.staybill.model.Usuario;
import com.api.staybill.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario registrarUsuario(Usuario usuario) {
        if (usuarioRepository.buscarPorCorreo(usuario.getCorreo_usu()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Este correo ya está registrado");
        }

        usuario.setPass_usu(passwordEncoder.encode(usuario.getPass_usu()));
        return usuarioRepository.save(usuario);
    }

    public Usuario login(LoginRequest request) {
        Usuario usuario = usuarioRepository.buscarPorCorreo(request.correo_usu())
                .filter(u -> passwordEncoder.matches(request.pass_usu(), u.getPass_usu()))
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Correo o contraseña incorrectos"));

        if (!Boolean.TRUE.equals(usuario.getEstado_usu())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "La cuenta está inactiva");
        }

        return usuario;
    }
}
