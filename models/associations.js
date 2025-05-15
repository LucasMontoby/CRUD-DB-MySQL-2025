const Moto = require('./Moto');
const Categoria = require('./Categoria');


Categoria.hasMany(Moto, {foreignKey: 'categoria_id'});
Moto.belongsTo(Categoria, {foreignKey: 'categoria_id'});

module.exports = {
    Moto,
    Categoria
}