# Projeto E-Diaristas

Projeto desenvolvido durante a imersao Multi Stack da TreinaWeb utilizando Java e Spring Boot.

## Dependecias
- Spring Boot
- Spring MVC
- Thymeleaf
- Spring Data JPA
- Bean Validation

## Dependencias de Desenvolvimento
- Sring Boot DevTools
- Lombok

## Requisitos
- Java 17
- Maven 4.0

## Como testar esse projeto na minha maquina?
Clone este repositorio e entre na pasta do projeto.

```sh
git clone https://github.com/jaomanoel/e-diaristas.git
cd e-diaristas
```

Atualize as configuracoes de acesso ao banco de dados no arquivo [application.properties](src/main/resources/application.properties).

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/my_database
spring.datasource.username=postgres
spring.datasource.password=mypassword
```

Execute o projeto atraves do Maven

```sh
mvm spring-boot:run
```

acesse a aplicacao em [http://localhost:8080/admin/services/](http://localhost:8080/admin/services/)