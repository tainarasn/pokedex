/**
 * quando clicar no pokemon esconder o pokemon aberto, e mostrar o card correspondente ao que foi selecionado na listagem
 * 
 * Para isso vamos trabalhar com 2 elementos, listagem e e cartao pokemon
 * 
 * criar duas variaveis no js para trabalahar com elelmntos d etela
 * 
 * trabalhar com evento de click
 * 
 * remover classe aberto
 * -clicar em outro e pegar o id do pokemon pra mostrar o respectivo cartao
 *
 * 
 * UTILIZAR CLASSE esconder/mostrar
 */

const listSelectionPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

listSelectionPokemons.forEach(pokemon => {

    pokemon.addEventListener('click',()=>{
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('open');
        
        const idPokemonSelected=pokemon.attributes.id.value

        const cardPokemonToOpen = document.getElementById('card'+idPokemonSelected)
        cardPokemonToOpen.classList.add('open')

        const cardPokemonAtive = document.querySelector('.ativo')
        cardPokemonAtive.classList.remove('ativo');

        const cardPokemonToAtive = document.getElementById(idPokemonSelected)
        cardPokemonToAtive.classList.add('ativo')
    })
})