delete from TELEFONES where CPF_CLIENTE in (select cpf from CLIENTES where NOME like '%santos');
delete from CLIENTES where nome like '%santos';