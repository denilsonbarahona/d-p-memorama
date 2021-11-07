import {Board} from "./board.js";
import {PlayCard} from "./playcard/playcard.js";


export function setBoard(characteres, setCardOpen) {
    const $board = Board(); 
    characteres.forEach(character => {
        const {image, species, name, gender, status, apOrigin} = character;
        const $card = PlayCard(image, species, name, gender, status, apOrigin);
        $card.addEventListener("click",(event)=>setCardOpen(event, character.id))
        $board.append($card);
    });

    return $board;
}

