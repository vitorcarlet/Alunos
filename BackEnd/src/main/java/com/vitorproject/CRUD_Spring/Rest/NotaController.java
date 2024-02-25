package com.vitorproject.CRUD_Spring.Rest;

import com.vitorproject.CRUD_Spring.POJO.Notas;
import com.vitorproject.CRUD_Spring.Services.NotasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/notas")
public class NotaController {

    @Autowired
    private NotasService notaService;

    @GetMapping
    public List<Notas> findAll() {
        return notaService.findAll();
    }

    @GetMapping("/{id}")
    public Notas findById(@PathVariable Long id) {
        return notaService.findById(id);
    }

    @PostMapping
    public Notas save(@RequestBody Notas nota) {
        return notaService.save(nota);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        notaService.delete(id);
    }

    // ... outros métodos de acordo com suas necessidades
}