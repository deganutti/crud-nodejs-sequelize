const Usuarios = require("../models/Usuarios");

module.exports = {
  /**
   * Listando todos os nívels de acesso
   */
  async index(req, res) {
    try {
      const usuarios = await Usuarios.findAll();

      return res.json(usuarios);
    } catch (error) {
      console.error("Erro do capiroto", error);
    }
  },
  /**
   * Novos cadastros de nivel_acesso
   */
  async store(req, res) {
    const { nome, email, senha, id_nivel_acesso } = req.body;
    const usuarios = await Usuarios.create({ nome, email, senha, id_nivel_acesso });
    return res.json(usuarios);
  },
  async post(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha, id_nivel_acesso } = req.body;

      const usuarios = await Usuarios.findByPk(id);
      if (!usuarios) {
        return res.status(404).json({
          code: 404,
          error: "Usuario não localizado!",
          message: e.message,
        });
      } else {
        await usuarios.update({ nome, email, senha, id_nivel_acesso });
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
  async del(req, res) {},
};
