# Give Your Application Auto-deploy Superpowers

Udacity CI/CD exercise with a React/Redux TypeScript frontend, NestJS/TypeORM backend, CircleCI pipeline, and AWS deployment assets.

## Layout

- `frontend/`: employee interface, Webpack configuration and Jest tests.
- `backend/`: API, database migrations and Jest tests.
- `.circleci/`: CI workflow and deployment automation.
- `util/`: local Docker Compose configuration.
- `screenshots/`: project evidence.

## Local development

This repository uses a legacy Node/TypeScript/Webpack stack. Use an isolated development environment compatible with the checked-in dependencies; dependency modernization remains separate work.

1. Copy `backend/.env.sample` to `backend/.env` and configure your own database and application settings.
2. Install each project's dependencies with `npm install` in its directory. Review any lockfile changes.
3. In `backend`, run `npm run build` and `npm test`. Configure a disposable database before running `npm run migrations` or `npm start`.
4. Create `frontend/.env` with `API_URL` pointing to your backend. In `frontend`, run `npm run build`, `npm test -- --runInBand`, and `npm start` (development port 3000).

## Deployment

Review `.circleci/config.yml` and the infrastructure templates before enabling CI. Configure your own AWS credentials, region, SSH access, database values, and external service settings through CI secrets. Existing infrastructure identifiers are lab examples. The workflow creates and deletes AWS resources and runs database migrations; review those effects and costs before execution.

Audit jobs report dependency findings without force-upgrading packages. Backend lint checks no longer modify source; use `npm run lint:fix` explicitly when desired. Generated builds, installer archives and local environment files are excluded from new changes. Removing a tracked environment file does not remove its historical contents; rotate any credentials previously stored there.

Validation for this cleanup is recorded in the pull request. Full cloud deployment and application integration testing require a configured environment.
