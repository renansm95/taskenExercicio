
SELECT C.NOME FROM CLIENTES AS C
INNER JOIN TELEFONES AS T ON C.CPF = T.CPF_CLIENTE
 