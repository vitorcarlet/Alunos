package com.vitorproject.CRUD_Spring.Services;

import com.vitorproject.CRUD_Spring.DAO.AlunoRepository;
import com.vitorproject.CRUD_Spring.POJO.Aluno;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    @Autowired
    private AlunoRepository alunoRepository;

    public List<Aluno> findAll() {
        return alunoRepository.findAll();
    }

    public Aluno findById(Long id) {
        return alunoRepository.findById(id).orElse(null);
    }

    public Aluno save(Aluno aluno) {
        return alunoRepository.save(aluno);
    }

    public void delete(Long id) {
        alunoRepository.deleteById(id);
    }

    public List<Aluno> findByNome(String nome) {
        return alunoRepository.findByNomeContainingIgnoreCase(nome);
    }

    public List<Aluno> findByMatricula(String matricula) {
        return alunoRepository.findByMatricula(matricula);
    }

    public List<Aluno> findByCurso(String curso) {
        return alunoRepository.findByCurso(curso);
    }

    public List<Aluno> findByNotasValorGreaterThan(Double valor) {
        return alunoRepository.findByNotasValorGreaterThan(valor);
    }

    public List<Aluno> findByNotasDisciplina(String disciplina) {
        return alunoRepository.findByNotasDisciplina(disciplina);
    }

}
