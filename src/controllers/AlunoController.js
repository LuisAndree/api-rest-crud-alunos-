const AlunoService = require('../services/AlunoService');

module.exports = {
    listarAlunos: async(req, res)=> {
        let json = {error: '', result:[]};

        let alunos = await AlunoService.listarAlunos();

        for(let i in alunos) {
            json.result.push({
                id: alunos[i].id,
                nome: alunos[i].nome,
                idade: alunos[i].idade,
                cpf: alunos[i].cpf
            });
        }
        res.json(json);
    },

    exibirAluno: async(req, res)=> {
        let json = {error: '', result:{}};

        let id = req.params.id;
        let aluno = await AlunoService.exibirAluno(id);

        if(aluno) {
            json.result = aluno;
        }
        res.json(json);

    },

    adicionarAluno: async(req, res)=> {
        let json = {error: '', result:[]};

        let nome = req.body.nome;
        let idade = req.body.idade;
        let cpf = req.body.cpf;

        if(nome && idade && cpf) {
            let AlunoId = await AlunoService.adicionarAluno(nome, idade, cpf);
            json.result = {
                id: AlunoId,
                nome,
                idade,
                cpf
            }
        }else{
            json.error = 'Informações não enviadas'
        }
        res.json(json);

    },

    alterarAluno: async(req, res)=> {
        let json = {error: '', result:[]};

        let id = req.params.id;
        let nome = req.body.nome;
        let idade = req.body.idade;
        let cpf = req.body.cpf;

        if(id && nome && idade && cpf) {
            await AlunoService.alterarAluno(id, nome, idade, cpf);
            json.result = {
                id,
                nome,
                idade,
                cpf
            }
        }else{
            json.error = 'Informações não enviadas'
        }
        res.json(json);

    },

    excluirAluno: async(req, res)=> {
        let json = {error: '', result:[]};
        await AlunoService.excluirAluno(req.params.id);
        res.json(json);  

    }

}