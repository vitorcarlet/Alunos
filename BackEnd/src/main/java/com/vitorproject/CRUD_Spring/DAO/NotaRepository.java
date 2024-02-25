package com.vitorproject.CRUD_Spring.DAO;

import com.vitorproject.CRUD_Spring.POJO.Aluno;
import com.vitorproject.CRUD_Spring.POJO.Notas;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface NotaRepository extends JpaRepository<Notas, Long> {
    List<Notas> findByAluno(Aluno aluno);

    List<Notas> findByDisciplina(String disciplina);

    List<Notas> findByValorGreaterThan(Double valor);

    List<Notas> findByDataBetween(Date dataInicio, Date dataFim);
}

