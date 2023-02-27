const TurmasController = require('../controllers/turmasController')
const {Router} = require('express')

const router = Router()

router.get('/turmas', TurmasController.pegaTodasAsTurmas)
router.get('/turmas/:id', TurmasController.pegaTurmasPorId)
router.post('/turmas', TurmasController.adicionaTurma)
router.put('/turmas/:id', TurmasController.atualizaTurma)
router.delete('/turmas/:id', TurmasController.deletaTurma)

module.exports = router