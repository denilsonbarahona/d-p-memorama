import {Render} from '../lib/render.js';
import {$app} from "../objects.js";
import {getCharacter, getOrigin} from '../API/API.js';
import {setBoard} from '../components/board/index.js';
import {appendMessage} from './game.controller.js';
import {setCardOpen, reStartGame} from '../events.js';

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) +min);
}

function getSixIndex(counter, characters, selected){
    if(counter>6){ 
        return selected;
    }
    const character = characters[getRandom(0,19)]; 
    if(selected.some(item=>item.id === character.id))
        return getSixIndex(counter,characters, selected);
     
    selected.push(character);
    return getSixIndex(counter+1,characters, selected);
 
}

function selectCharacters(characters){
   const selection =  getSixIndex(1,characters,[]);  
   const charactersInfo = selection.map(async item=>{
        const origin = await getOrigin(item.origin.url);
        if(!origin.error)
            return {...item, apOrigin: origin.dimension}
        else 
            throw Error("API FAIL")
        //return {...item, apOrigin:""}
   })  
   return Promise.all(charactersInfo);
}

function shuffleCharacters(characters){
    const toShuffle = [...characters, ...characters];
    toShuffle.sort(()=>Math.random() - 0.5);
    return toShuffle;
}

async function getCharacters(){
    const page = getRandom(1,42);
    const characters = await getCharacter(page);
    if(!characters.error) {
        const response = await selectCharacters(characters);
        const shuffle = shuffleCharacters(response);
        return shuffle;
    }

    throw Error("API FAIL")
}

function OpenAutomaticaly(){
    const $cards = document.querySelectorAll(".card-group");
    for(let $card of $cards){
      $card.classList.add("card-group--isopen")
    } 
}

function CloseAutomaticaly(){ 
    const $cards = document.querySelectorAll(".card-group");
    for(let $card of $cards){
      $card.classList.remove("card-group--isopen")
    }
}

function showHideCards(){
    setTimeout(()=>OpenAutomaticaly(), 500);
    setTimeout(()=>CloseAutomaticaly(), 3000);
}

export async function appendBoard(){
    try {
        const characters = await getCharacters();
        const $board = setBoard(characters, setCardOpen);
        Render($app, $board, $app?.children[0]);
        showHideCards();
    }catch {
        appendMessage("Error connecting to API.", "TRY AGAIN", reStartGame);
    }
}