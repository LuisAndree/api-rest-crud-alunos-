const { query } = require('express');
const db = require('../db');

module.exports = {
    listarAlunos: async () => {
        try {
            const results = await new Promise((resolve, reject) => {
                db.query('SELECT * FROM alunos', (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });
            return results;
        } catch (error) {
            throw error;
        }
    },

    exibirAluno: async (id)=> {
        try{
            const results = await new Promise((resolve, reject)=> {
                db.query('SELECT * FROM alunos WHERE id = ?', [id], (error, results) => {
                    if(error) {reject(error); return; }
                    if(results.length > 0) {
                        resolve(results[0]);
                    }else{
                        resolve(false);
                    }
                })
            });
            return results;
        } catch(error) {
            throw error;
        }
    },

    adicionarAluno: async (nome, idade, cpf) => {
        try {
            const results = await new Promise((resolve, reject) => {
                db.query('INSERT INTO alunos (nome, idade, cpf) VALUES (?, ?, ?)', [nome, idade, cpf], (error, results) => {
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(results);
                });
            });
            return results.insertId;
        } catch (error) {
            throw error;
        }
    },
    

    alterarAluno: async (id, nome, idade, cpf)=> {
        try{
            const results = new Promise((resolve, reject)=> {
                db.query('UPDATE alunos SET nome = ?, idade = ?, cpf = ? WHERE id = ?',
                    [nome, idade, cpf, id], 
                    (error, results) => {
                        if(error) {reject(error); return; }
                        resolve(results);
                
                    }
                );
            });
            return results
        } catch (error) {
            throw error;
        }
    },

    excluirAluno: async (id)=> {
        try {
            const results = new Promise((aceito, rejeitado)=> {
                db.query('DELETE FROM alunos WHERE id = ?', [id], (error, results)=>{
                    if(error) {rejeitado(error); return; }
                    aceito(results);
                });
            });
            return results;
        } catch(error) {
            throw error;
        }     
    },

};