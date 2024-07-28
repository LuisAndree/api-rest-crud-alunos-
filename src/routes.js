const express = require ('express');
const router = express.Router();

const AlunoController = require('./controllers/AlunoController');
const TurmaController = require('./controllers/TurmaController');

//Rotas de Aunos
router.get('/alunos', AlunoController.listarAlunos);
router.get('/aluno/:id', AlunoController.exibirAluno);
router.post('/aluno', AlunoController.adicionarAluno);
router.put('/aluno/:id', AlunoController.alterarAluno);
router.delete('/aluno/:id', AlunoController.excluirAluno);

//Rotas de turmas
router.get('/turmas', TurmaController.listarTurmas);
router.get('/turma/:id', TurmaController.exibirTurma);
router.post('/turma', TurmaController.adicionarTurma);
router.put('/turma/:id', TurmaController.alterarTurma);
router.delete('/turma/:id', TurmaController.excluirTurma);


module.exports = router;