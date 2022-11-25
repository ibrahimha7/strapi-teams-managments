"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parse = require("pg-connection-string").parse;
const { host, port, database, user, password } = parse(process.env.DATABASE_URL);
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host,
            port,
            database,
            user,
            password,
            ssl: {
                rejectUnauthorized: false,
            },
        },
        debug: false,
    },
});
