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

/**
 * Função para exibir todos os itens disponíveis.
 * Itera sobre o array 'dados' e exibe todos os itens na seção de resultados.
 */
function mostrarTodos() {
  let section = document.getElementById("resultados-pesquisa"); // Elemento onde os resultados serão exibidos
  let resultados = ""; // Armazena os resultados

  // Itera sobre o array 'dados', montando o HTML de cada item
  for (let dado of dados) {
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

  // Exibe todos os itens encontrados
  section.innerHTML = resultados;
}
