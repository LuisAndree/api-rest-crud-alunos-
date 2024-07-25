const { query } = require('express');
const db = require('../db');

module.exports = {
    listarAlunos: ()=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('SELECT * FROM alunos', (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    exibirAluno: (id)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('SELECT * FROM alunos WHERE id = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            })
        });
    },

    adicionarAluno: (nome, cpf)=> {
        return new Promise((aceito, rejeitado)=> {
            
            db.query('INSERT INTO alunos (nome, cpf) VALUES (?, ?)',
                [nome, cpf], 
                (error, results) => {
                    if(error) {rejeitado(error); return; }
                    aceito(results.insertId);
            
                }
            );
        });
    },

    alterarAluno: (id, nome, cpf)=> {
        return new Promise((aceito, rejeitado)=> {
            
            db.query('UPDATE alunos SET nome = ?, cpf = ? WHERE id = ?',
                [nome, cpf, id], 
                (error, results) => {
                    if(error) {rejeitado(error); return; }
                    aceito(results);
            
                }
            );
        });
    },

    excluirAluno: (id)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query('DELETE FROM alunos WHERE id = ?', [id], (error, results)=>{
                if(error) {rejeitado(error); return; }
                aceito(results);
            });
        });
    },

};