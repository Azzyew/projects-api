# Programação para dispositivos móveis em android - Trabalho de extensão

Esse projeto foi feito para o trabalho de extensão da disciplina de Programação para dispositivos móveis em android. O foco era fazer um aplicativo que pudesse ajudar um programador freelancer a organizar melhor seus projetos em andamento. Este repositório possui o backend da aplicação, para accesar o código do aplicativo clique [aqui](https://github.com/Azzyew/projects-app).

## Como rodar

O processo para rodar a api é bem simples!!

Se certifique de que você já tenha instalado o Docker na sua máquina

- Crie um arquivo .env baseado no .env.example e preencha-o corretamente

- Suba um banco de dados no Docker (as credenciais precisam bater com as utilizadas na .env)

```bash
docker run --name NomeDoContainer -e POSTGRES_USER=NomeUser -e POSTGRES_PASSWORD=SenhaAqui -e POSTGRES_DB=NomeDoBanco -p 5432:5432 --restart always -d postgres
```

(lembrando que é sempre válido 'psql postgres' e depois um '\du' pra verificar os usuários atuais do postgres e preencher a .env corretamente)

- Instale todas as dependências

```bash
npm install
```

- Rode o projeto com o Nest!

```bash
npm run start
```

### Tecnologias utilizadas

- [Nest](https://github.com/nestjs/nest)
- [Docker](https://www.docker.com)
- [Postgres](https://www.postgresql.org)
- [TypeORM](https://typeorm.io)