import {Render} from '../lib/render.js';
import {$app,$reward,$lives} from "../objects.js";
import {setMessageCard, setPlayCard, setLoader} from '../components/cards/index.js';
import {setLoaderUi, reStartGame} from '../events.js';
import {appendBoard} from './game.board.controller.js';

var reward = 0;
var lives = 3;
var prev = 0;
var founded = 0;

export function CheckPair(id){
    if(prev === 0) {
        prev = id;
        return 2;
    }
    
    if(prev === id) {
        prev = 0;
        return 1;
    }
    prev = 0;
    return 0;
}

export function appendPlay(){
    const $playCard = setPlayCard(setLoaderUi);
    Render($app, $playCard, $app?.children[0]);
    if($playCard.open) {
        $playCard.close();
    }
    $playCard.showModal();
}

export function appendLoader(){
    const $loader = setLoader();
    Render($app, $loader, $app?.children[0]);
    appendBoard();
}

export function appendMessage(msg, actiontext, callback, clean=true){
    const $MessageCard = setMessageCard(msg, actiontext, callback);
    Render($app, $MessageCard, clean?$app?.children[0]:null);
    if($MessageCard.open) {
        $MessageCard.close();
    }
    $MessageCard.showModal();
}

export function removeModal(){
    const $modal = document.querySelector(".modal");
    $app.removeChild($modal)
}

export function setReward(increase){
    if(reward>=0){
        reward = reward+increase;
        reward =(reward<0)?0:reward;
        $reward.innerText= `${"0000".substring(0,"0000".length - reward.toString().length)+reward.toString()}`;
    }
}

export function reduceLives() {
    lives = lives - 1;
    $lives.innerText = `x${lives}`; 
    if(lives === 0) {
        appendMessage("You have run out of lives.", "PLAY AGAIN", reStartGame, false);
    }
}

export function foundedCounter(){
    founded++;    
    if(founded===6) {
        appendMessage("Congratulations! You have completed the game.", "PLAY AGAIN", reStartGame, false);
    }
}