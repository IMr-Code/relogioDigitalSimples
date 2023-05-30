# relogioDigitalSimples
Um repositorio com um relogio digital simples feita com HTML, Css e Javascript.

Nome: Caleb Marcelino
Email: calebmarcelino2@gmail.com
Facebook: https://www.facebook.com/caleb.marcelino.16144
Github: https://github.com/CalebMarcelino


Na primeira linha temos um evento de DOMContentLoaded que basicamente é chamada quando todos os elementos da página terminarem de carregar, depois da chamada temos um try que tenta tenta pegar o valor do boarColor que esta armazenada no localStorage, caso de certo ele compara se a variavel mode_shose é igual a noturno, caso for, ele muda a cor do fundo para preto, a cor da letra e a cor da borda para branco.

Depois temos um else, que se for uma condição qualquer ele volta tido  ao normal que seria o modo claro, o cacth é executado caso ocorra um erro.

A função changeMode é responsavel por mudar a cor do fundo quando o usuario estiver clicando nõs botões, as euro functions que chamamos a cima só acontecem quando a página carregar e elas pegam o valor que o usuario definiu ao clicar nos botões, esses botões chamam a função changeMode.

a função showTime() é responsavel por mostrar a hora, minuto e segundo, pegamos o objecto Date e depois pegamos as referencias ou metodos do Objeto Date que agora é uma constante com o nome DATA, eesses metodos são da hora, minuto e segundo

a constante t ela se referece ao span do nosso HTML, usei o innerHTML para rescrever o conteudo dela passando o valor da hora, e depois concatenei com dois pontos, depois o minuto, novamente concatenei com dois pontos e por fim o segundo.

a função loop() ela é chamada em cada frame, para isso usei a função requestAnimationFrame() que praticamente vai chamar o loop em todas os frames e dentro do loop coloquei a função showTime(), deste jeito ela sera chamada junto com a função loop(), e desta forma o meu código do showTime sera chamado sempre, por isso que voce consegue ver os segundos contando em tempo real

