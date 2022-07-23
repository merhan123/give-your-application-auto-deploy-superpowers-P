"use strict";
const config = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    cli: {
        migrationsDir: 'src/migrations',
    }
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map