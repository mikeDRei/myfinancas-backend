const sequelize = require('sequelize');
const model = require('../models');
const categoria = model.Categoria;

module.exports = {
    async create(request, response) {
        try {
            const {
                descricao
            } = request.body

            const Categoria = await categoria.create({
                descricao
            });

            return response.json({ msg: "Categoria cadastrada com sucesso!! " });

        } catch (error) {
            return response.json({ msg: "Não foi possivel cadastrar a categoria " + error });

        }
    },

    async update(request, response) {
        try {
            const { id } = request.params;

            const {
                descricao
            } = request.body

            const Categoria = await categoria.update({
                descricao

            }, { where: { id } });

            return response.json({ msg: "Categoria alterada com sucesso!! " });


        } catch (error) {
            return response.json({ msg: "Não foi possivel alterar a categoria " + error });
        }
    },

    async findAll(request, response) {
        try {
            const { page } = request.params;
            const limite = 5;

            const Categoria = await categoria.findAndCountAll({
                order: [
                    ['id', 'ASC']
                ],     
                limit: limite,
                offset: parseInt(page)
            })

            return response.json(Categoria);

        } catch (error) {
            return response.json("Erro ao listar categorias " + error);
        }
    }

}