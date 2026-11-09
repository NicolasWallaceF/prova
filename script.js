//BOTAO PESQUISA

pesquisa.addEventListener("input", function() {

  const texto = pesquisa.value.toLowerCase();

  const encontrados = pokemon-cards.filter(pokemon =>
    pokemon.toLowerCase().includes(texto)
  );

  resultados.innerHTML = "";

  encontrados.forEach(pokemon => {
    resultados.innerHTML += `<p>${pokemon}</p>`;
  });

});