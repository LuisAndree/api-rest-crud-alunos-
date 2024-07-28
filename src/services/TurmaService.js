const { query } = require('express');
const db = require('../db');

module.exports = {
    listarTurmas: async () => {
        try {
            const results = await new Promise((resolve, reject) => {
                db.query('SELECT * FROM turmas', (error, results) => {
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

    exibirTurma: async (id)=> {
        try{
            const results = await new Promise((resolve, reject)=> {
                db.query('SELECT * FROM turmas WHERE id = ?', [id], (error, results) => {
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

    adicionarTurma: async (nome, descricao) => {
        try {
            const results = await new Promise((resolve, reject) => {
                db.query('INSERT INTO turmas (nome, descricao) VALUES (?, ?)', [nome, descricao], (error, results) => {
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
    }
};