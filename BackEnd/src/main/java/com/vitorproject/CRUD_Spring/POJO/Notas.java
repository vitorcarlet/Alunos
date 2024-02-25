package com.vitorproject.CRUD_Spring.POJO;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "notas")
public class Notas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Aluno aluno;
    private String disciplina;
    private Date data;
    private Double valor;


}