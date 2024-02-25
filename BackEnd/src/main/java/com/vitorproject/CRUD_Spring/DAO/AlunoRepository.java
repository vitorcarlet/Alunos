package com.vitorproject.CRUD_Spring.DAO;

import com.vitorproject.CRUD_Spring.POJO.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
    List<Aluno> findByNomeContainingIgnoreCase(String nome);

    List<Aluno> findByMatricula(String matricula);

    List<Aluno> findByCurso(String curso);

    List<Aluno> findByNotasValorGreaterThan(Double valor);

    List<Aluno> findByNotasDisciplina(String disciplina);
}
