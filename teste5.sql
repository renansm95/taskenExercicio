
create table CLIENTES (
  CPF varchar(11) not null primary key,
  NOME varchar(40),
  IDADE int
) default charset = utf8;

create table TELEFONES (
  CPF_CLIENTE varchar(11) not null primary key,
  DDD varchar(3),
  TELEFONE varchar(9),
  foreign key (CPF_CLIENTE) references CLIENTES (CPF)
) default charset = utf8

