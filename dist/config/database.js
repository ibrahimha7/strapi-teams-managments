"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'ec2-54-75-184-144.eu-west-1.compute.amazonaws.com'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'dfue6nci1b9491'),
            user: env('DATABASE_USERNAME', 'lqpjztpxlagnmz'),
            password: env('DATABASE_PASSWORD', '5c7c21fb44cf6f9ac09efa883bb60c6681dc0a9c85cd697f00c8852ff04c2b93'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
