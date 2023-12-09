docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probatri/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probatri/app ../..
