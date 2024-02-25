package com.vitorproject.CRUD_Spring.Services;

import com.vitorproject.CRUD_Spring.DAO.NotaRepository;
import com.vitorproject.CRUD_Spring.POJO.Aluno;
import com.vitorproject.CRUD_Spring.POJO.Notas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class NotasService {

    @Autowired
    private NotaRepository notaRepository;

    public List<Notas> findAll() {
        return notaRepository.findAll();
    }

    public Notas findById(Long id) {
        return notaRepository.findById(id).orElse(null);
    }

    public Notas save(Notas nota) {
        return notaRepository.save(nota);
    }

    public void delete(Long id) {
        notaRepository.deleteById(id);
    }

    public List<Notas> findByAluno(Aluno aluno) {
        return notaRepository.findByAluno(aluno);
    }

    public List<Notas> findByDisciplina(String disciplina) {
        return notaRepository.findByDisciplina(disciplina);
    }

    public List<Notas> findByValorGreaterThan(Double valor) {
        return notaRepository.findByValorGreaterThan(valor);
    }

    public List<Notas> findByDataBetween(Date dataInicio, Date dataFim) {
        return notaRepository.findByDataBetween(dataInicio, dataFim);
    }

}