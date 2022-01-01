const Usuarios = require("../models/Usuarios");
const Nivel_Acesso = require("../models/NivelAcesso");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  /**
   * Listando todos os nívels de acesso
   */
  async index(req, res) {
    try {
      const usuarios = await Usuarios.findAll({
        include: {
          association: "nivel_acesso",
        },
      });

      return res.json(usuarios);
    } catch (e) {
      return res.status(500).json({
        code: 500,
        error: "Erro ao executar ação!",
        message: e.message,
      });
    }
  },
  /**
   * Novos cadastros de nivel_acesso
   */
  async store(req, res) {
    const { nome, email, senha, id_nivel_acesso } = req.body;

    const passwordHash = bcrypt.hashSync(senha, 10);
    const usuarios = await Usuarios.create({
      nome,
      email,
      senha: passwordHash,
      id_nivel_acesso,
    });
    return res.json(usuarios);
  },
  async post(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, id_nivel_acesso } = req.body;
      const passwordHash = bcrypt.hashSync(senha, 10);
      const usuarios = await Usuarios.findByPk(id);
      if (!usuarios) {
        return res.status(404).json({
          code: 404,
          error: "Usuario não localizado!",
          message: e.message,
        });
      } else {
        await usuarios.update({ 
          nome  , 
          email  , 
          senha : passwordHash , 
          id_nivel_acesso 
         });
        await usuarios.save();
        return res.json(usuarios);
      }
    } catch (e) {
      return res.status(500).json({
        code: 500,
        error: "Erro ao executar ação!",
        message: e.message,
      });
    }
  },
  async del(req, res) {
    try {
      const { id } = req.params;
      const usuarios = await Usuarios.findByPk(id);
      if (!usuarios) {
        return res.status(404).json({
          code: 404,
          error: "Usuario não localizado!",
          message: e.message,
        });
      } else {
        await usuarios.destroy();
        return res.json({
          code: 202,
          retorno: "Informação deletada com sucesso!",
        });
      }
    } catch (e) {
      return res.status(500).json({
        code: 500,
        error: "Erro ao executar ação!",
        message: e.message,
      });
    }
  },
};
