"use strict";

var mysql      = require('mysql');

describe('mysql test', () => {
    var connection;

    before(() => {
        connection = mysql.createConnection({
            host     : '127.0.0.1',
            user     : 'root',
            password : 'admin',
            database : 'nodejs'
        });
    });

    it('test connection', (done) => {
        connection.connect(function(err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                done(err);
            }
            console.log('connected as id ' + connection.threadId);
            done();
        });
    });

    it('insert new item to mysql table', () => {

    });

    it('select all items', () => {

    });
});