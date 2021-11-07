
import { MessageCard } from './message.card.js';
import { PlayBanerCar } from './play.card.banner.js'
import { LoaderCard } from './loader.card.js';

export function setMessageCard(Message, actionText, action){
    const $MessageCard = MessageCard(Message, actionText, action);
    const $accion = $MessageCard.querySelector("#action");
    $accion.addEventListener("click",action);
    return $MessageCard;
}

export function setPlayCard(action){
    const $playCard = PlayBanerCar();
    const $play = $playCard.querySelector("#play");
    $play.addEventListener("click", action);
    return $playCard;
}

export function setLoader(){
    return LoaderCard();
}
