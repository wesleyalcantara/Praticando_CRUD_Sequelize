const {Router} = require('express')
const PessoaCotroller = require('../controllers/pessoaController')

const router = Router()

router.get('/pessoas', PessoaCotroller.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaCotroller.pegaPessoaPorId)
router.post('/pessoas', PessoaCotroller.criaPessoa)
router.put('/pessoas/:id', PessoaCotroller.atualizaPessoa)
router.delete('/pessoas/:id', PessoaCotroller.deletaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCotroller.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaCotroller.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCotroller.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCotroller.deletaMatricula)


module.exports = router