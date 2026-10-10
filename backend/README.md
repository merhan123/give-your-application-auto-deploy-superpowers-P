# CI/CD lab backend

NestJS and TypeORM backend for the [application project](../README.md). The source lives in `src/`; tests and configuration are defined in `package.json` and `test/`.

## Local setup

Use an isolated Node environment compatible with the legacy dependencies in `package.json`. This cleanup does not upgrade the application stack.

1. Copy `.env.sample` to a local `.env` and replace database/settings examples with your own values. Keep `.env` ignored by Git.
2. Configure a disposable PostgreSQL database. The configuration requires `TYPEORM_ENTITIES`, `TYPEORM_USERNAME`, `TYPEORM_PASSWORD`, `TYPEORM_DATABASE` and `TYPEORM_HOST`. The default database port is 5432 and backend port is 3030.
3. Install dependencies with `npm install` and review any lockfile changes.
4. Run the checks below before starting the service. Configure any enabled external authentication and logging integrations through local or CI secrets.

```sh
npm run build
npm test
npm run lint
```

`npm run lint:fix` explicitly modifies source formatting/lint findings. The regular lint command does not.

When the disposable database is ready, `npm run migrations` applies schema changes and `npm start` starts the backend. Migrations change the configured database; verify its target first. Integration tests (`npm run test:e2e`) require their configured services.

## Credentials

Do not put authentication client secrets, database passwords or access tokens in documentation, commits or curl examples. Use local ignored environment files and your CI secret store. Rotate any Auth0 client secret previously published in this README; deleting examples does not remove copies from Git history.

## Deployment and validation

Follow the root README and review `.circleci/config.yml` from the repository root before enabling cloud deployment. Build, database integration and deployment require a configured environment; a documentation update does not verify them.

## Framework license

Nest framework licensing is documented in the [upstream Nest license](https://github.com/nestjs/nest/blob/master/LICENSE). This reference describes the framework's license.
