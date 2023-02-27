const database = require('../models')

class TurmasController {
    static async pegaTodasAsTurmas (req, res){
        try{
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        }catch(error){
            res.status(500).json({mensagem: error.message})
        }
    }

    static async pegaTurmasPorId (req, res){
        const {id} = req.params
        try{
            const umaTurma = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(umaTurma)
        }catch(error){
            res.status(500).json({mensagem: error.message})
        }
    }

    static async adicionaTurma (req, res){
        const novaTurma = req.body
        try{
            const turmaAdicionada = await database.Turmas.create(novaTurma)
            return res.status(200).json(turmaAdicionada)
        }catch(error){
            res.status(500).json({mensagem: error.message})
        }
    }
    
    static async atualizaTurma (req, res){
        const {id} = req.params
        const alteracoesTurmas = req.body
        try{
            await database.Turmas.update(alteracoesTurmas, {where: {id: Number(id)}})
            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            res.status(200).json(turmaAtualizada)
        }catch(error){
            res.status(500).json({mensagem: error.message})
        }
    }

    static async deletaTurma (req, res){
        const {id} = req.params
        try{
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `Id ${id} deletado.`})
        }catch(error){
            res.status(500).json({mensagem: error.message})
        }
    }
}

module.exports = TurmasController