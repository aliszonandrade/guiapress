const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//Relacionamento de mão dupla
Category.hasMany(Article); // UMA categoria tem muitos artigos; 1 to Much
Article.belongsTo(Category); //UM artigo pertence a uma categoria; 1 to 1.

module.exports = Article;