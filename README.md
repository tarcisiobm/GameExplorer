<h1 align="center">Retro Game Explorer</h1>

<p align="center">
  <img alt="Projeto Retro Game Explorer" src=".github/preview.png" width="100%">
</p>

<p>Retro Game Explorer é uma plataforma para explorar e descobrir informações sobre jogos clássicos. Este projeto visa proporcionar uma experiência nostálgica, permitindo que o usuário mergulhe em uma vasta coleção de títulos icônicos.

A aplicação permite aos usuários realizar buscas detalhadas para encontrar jogos específicos através de um campo de pesquisa, onde resultados da pesquisa são apresentados destacando o título do jogo, uma breve descrição, o gênero e uma imagem relacionada. Além disso, cada jogo listado inclui um link direto para obter mais informações.</p>

## Funcionalidades

- 🔍 Pesquise jogos clássicos por título, gênero ou descrição.
- 🎨 Interface estilizada com um visual retrô, incluindo animações e efeitos.
- 📚 Saiba mais sobre cada jogo com links para descrições detalhadas.

## Tecnologias
- HTML
- CSS
- JavaScript 

## Acesse o projeto
Você pode executar o Retro Game Explorer diretamente pelos links do: [github](https://tarcisiobm.github.io/GameExplorer-ImersaoAlura/) | [vercel](https://game-explorer-imersao-alura.vercel.app) ou  fazer o clone deste repositório para para executar a aplicação localmente em sua máquina.

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/tarcisiobm/GameExplorer-ImersaoAlura.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd GameExplorer-ImersaoAlura
   ```

## Exemplo de Uso
 Exemplo da implementação da função pesquisa usando JavaScript:

```javascript
/**
 * Função para pesquisar nos dados e exibir resultados.
 * Caso o campo de pesquisa esteja vazio, exibe uma mensagem de erro.
 * Caso contrário, pesquisa nos campos 'titulo', 'descricao', 'genero' e 'tags' e exibe os itens encontrados.
 */
function pesquisar() {
  let section = document.getElementById("resultados-pesquisa"); // Elemento onde os resultados serão exibidos
  let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // Valor da pesquisa, sem espaços extras

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    section.innerHTML =
      "<div class='item-resultado'><p>DIGITE ALGUMA COISA PARA PESQUISAR</p></div>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase(); // Transforma o texto da pesquisa para minúsculas
  let resultados = ""; // Armazena os resultados da pesquisa

  // Itera sobre o dado, verificando se a pesquisa está presente nos campos
  for (let dado of dados) {
    let titulo = dado.titulo.toLowerCase();
    let descricao = dado.descricao.toLowerCase();
    let genero = dado.genero.toLowerCase();
    let tags = dado.tags.toLowerCase();

    // Verifica se o campo pesquisado aparece em algum dos campos do item
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      genero.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Monta o HTML do item encontrado
      resultados += `
        <div class="item-resultado">
          <section class="imagem-resultado">
            <img src="${dado.imagem}" alt="${dado.titulo}">
          </section>
          <section class="texto-resultado">
            <h2>${dado.titulo}</h2>
            <p>${dado.genero}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">saiba mais</a>
          </section>
        </div>`;
    }
  }

  // Exibe mensagem de erro caso nenhum resultado seja encontrado
  if (!resultados) {
    section.innerHTML =
      "<div class='item-resultado'><p>NENHUM REGISTRO ENCONTRADO</p></div>";
    return;
  }

  // Exibe os resultados encontrados
  section.innerHTML = resultados;
}

```

### Implementação de dados
Exemplo da implementação de dados usando JavaScript:
```javascript
let dados = [
  {
    titulo: "The Legend of Zelda",
    descricao:
      "The Legend of Zelda é uma série de ação e aventura da Nintendo. Os jogadores controlam Link, um herói que explora o reino de Hyrule, enfrenta inimigos e resolve quebra-cabeças para salvar a princesa Zelda e derrotar Ganondorf. A série é conhecida por sua combinação de exploração, combate e resolução de enigmas em um mundo aberto e envolvente.",
    link: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda",
    imagem: "assets/zelda.gif",
    genero: "Ação e Aventura",
    tags: "zelda link hyrule ganondorf mundo aberto exploração quebra-cabeças",
  }
];
```


## Contato
📧 tarcisiobm.dev@gmail.com  
📞 +55 (32) 98488-5764
