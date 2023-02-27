const database = require('../models')

class PessoaCotroller {
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaPessoaPorId( req, res){
        const {id} = req.params
        try {
            const pessoaPorId = await database.Pessoas.findOne( {where: { id: Number(id) }} )
            return res.status(200).json(pessoaPorId)
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa (req, res) {
        const {id} = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne( {where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletaPessoa( req, res){
        const {id} = req.params
        try {
            await database.Pessoas.destroy( {where: { id: Number(id) }} )
            return res.status(200).json({mensagem: `Id ${id} deletado.`})
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    //http://localhost:3000/pessoas/1/matriculas/5
    //http://localhost:3000/pessoas/:estudanteId/matriculas/:matriculaId
    static async pegaUmaMatricula( req, res){
        const {estudanteId, matriculaId} = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne( {where: { id: Number(matriculaId),
            estudante_Id: Number(estudanteId) }} )
            return res.status(200).json(umaMatricula)
        }catch(error){
            res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const {estudanteId} = req.params
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula (req, res) {
        const {estudanteId, matriculaId} = req.params
        const novasInfosMatricula = req.body
        try{
            await database.Matriculas.update(novasInfosMatricula, {
                where: {
                    id: Number(matriculaId), 
                    estudante_id: Number(estudanteId)}})
            const matriculaAtualizada = await database.Matriculas.findOne( {where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async deletaMatricula( req, res){
        const {estudanteId, matriculaId} = req.params
        try {
            await database.Matriculas.destroy( {where: { id: Number(matriculaId)}} )
            return res.status(200).json({mensagem: `Id ${matriculaId} deletado.`})
        }catch(error){
            res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaCotroller