(async() => {
    const database = require('./db');
    const produto = require('./produto');

    await database.sync();

    await database.Create({
        Nome: "Primeiro teste",
        DataCriacao: Date()
    });

    const alterProd = await produto.findByPk(1);
    alterProd.Nome = "Nome alterado";
    await alterProd.save();

    produto.destroy({where: {id: 1}});

    const findAllProd = await produto.findAll();
    console.log(findAllProd);
})();