
.PHONY: db-start db-migrate

db-start:
    docker-compose up -d

db-migrate:
    npx prisma format &&
    npx prisma generate