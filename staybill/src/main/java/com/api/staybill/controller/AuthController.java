package com.api.staybill.controller;

import com.api.staybill.dto.LoginRequest;
import com.api.staybill.model.Usuario;
import com.api.staybill.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/registro")
    public Usuario registrar(@RequestBody Usuario usuario) {
        return authService.registrarUsuario(usuario);
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}