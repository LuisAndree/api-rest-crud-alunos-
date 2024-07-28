const TurmaService = require('../services/TurmaService');

module.exports = {
    listarTurmas: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            let turmas = await TurmaService.listarTurmas();

            for (let i in turmas) {
                json.result.push({
                    id: turmas[i].id,
                    nome: turmas[i].nome,
                    descricao: turmas[i].descricao,
                });
            }
            res.json(json);
        } catch (error) {
            throw error;
        }

    },

    exibirTurma: async (req, res) => {
        try {
            let json = { error: '', result: {} };

            let id = req.params.id;
            let turma = await TurmaService.exibirTurma(id);

            if (turma) {
                json.result = turma;
            }
            res.json(json);
        } catch (error) {
            throw error;
        }
    },

    adicionarTurma: async (req, res) => {
        try {
            let json = { error: '', result: [] };

            let nome = req.body.nome;
            let descricao = req.body.descricao;

            if (nome && descricao) {
                let TurmaId = await TurmaService.adicionarTurma(nome, descricao);
                json.result = {
                    id: TurmaId,
                    nome,
                    descricao
                }
            } else {
                json.error = 'Informações não enviadas'
            }
            res.json(json);
        } catch (error) {
            throw error;
        }
    },
}