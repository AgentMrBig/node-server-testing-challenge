const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    getAll,
    findById,
};

function add(hobbit) {
    console.log('in add ', { hobbit })
    return db('hobbits')
        .insert(hobbit)
}

function update(id, changes) {
    return null;
}

function remove(id) {
    return db('hobbits')
        .where({ id })
        .del();
}

function getAll() {
    return db('hobbits');
}

function findById(id) {
    return null;
}
