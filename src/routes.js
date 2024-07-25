const express = require ('express');
const router = express.Router();

const AlunoController = require('./controllers/AlunoController');

router.get('/alunos', AlunoController.listarAlunos);
router.get('/aluno/:id', AlunoController.exibirAluno);
router.post('/aluno', AlunoController.adicionarAluno);
router.put('/aluno/:id', AlunoController.alterarAluno);
router.delete('/aluno/:id', AlunoController.excluirAluno);


module.exports = router;