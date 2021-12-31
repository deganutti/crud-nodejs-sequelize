const Nivel_Acesso = require("../models/NivelAcesso");
const { Op } = require("sequelize");

module.exports = {
  /**
   * Listando todos os nívels de acesso
   */
  async index(req, res) {
    try {
      const nivel_acesso = await Nivel_Acesso.findAll();

      return res.json(nivel_acesso);
    } catch (e) {
      return res.status(500).json({
        code: 404,
        error: "Nível de acesso não localizado!",
        message: e.message
      });
    }
  },
  /**
   * Novos cadastros de nivel_acesso
   */
  async store(req, res) {
    const { descricao } = req.body;
    const nivel_acesso = await Nivel_Acesso.create({ descricao });
    return res.json(nivel_acesso);
  },
  async post(req, res) {
    try {
      const { id } = req.params;
      const { descricao } = req.body;
  
      const nivel_acesso = await Nivel_Acesso.findByPk(id);
      if (!nivel_acesso) {
        return res.status(404).json({
          code: 404,
          error: "Nível de acesso não localizado!",
          message: e.message
          
        });
      } else {
        await nivel_acesso.update({ descricao });
        await nivel_acesso.save();
        return res.json(nivel_acesso);
      }
    } catch (e) {
      return res.status(500).json({
        code: 404,
        error: "Nível de acesso não localizado!",
        message: e.message
      });
    }   
  },
  async del(req, res) {
    try {
      const { id } = req.params; 

      const nivel_acesso = await Nivel_Acesso.findByPk(id);
      if (!nivel_acesso) {
        return res.status(404).json({
          code: 404,
          error: "Nível de acesso não localizado!",
          message: e.message          
        });
      } else { 
        await nivel_acesso.destroy();
        return res.json({
          code:202,
          retorno:"Informação deletada com sucesso!"
        });
      }
    } catch (e) {
      return res.status(500).json({
        code: 500,
        error: "Erro ao executar ação!",
        message: e.message
      });
    }   
  },
};
