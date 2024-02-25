package com.vitorproject.CRUD_Spring.Rest;

import com.vitorproject.CRUD_Spring.POJO.Aluno;
import com.vitorproject.CRUD_Spring.Services.AlunoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/alunos")
public class AlunoController {


    @Autowired
    private AlunoService alunoService;

    @GetMapping
    public List<Aluno> findAll() {
        return alunoService.findAll();
    }

    @GetMapping("/{id}")
    public Aluno findById(@PathVariable Long id) {
        return alunoService.findById(id);
    }

    @PostMapping
    public Aluno save(@RequestBody Aluno aluno) {
        return alunoService.save(aluno);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        alunoService.delete(id);
    }

    // ... outros métodos CRUD
}