const {Router} = require('express')
const NiveisController = require('../controllers/niveisController')

const router = Router()

router.get('/niveis', NiveisController.pegaTodosOsNiveis)
router.get('/niveis/:id', NiveisController.pegaNivelPorId)
router.post('/niveis', NiveisController.criaNivel)
router.put('/niveis/:id', NiveisController.atualizaNivel)
router.delete('/niveis/:id', NiveisController.deletaNivel)

module.exports = router