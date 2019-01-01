const knex = require('./knex');

//return knex sticker artinya sama dengan select *
module.exports = {
    getAll() {
        return knex('sticker');
    }
}