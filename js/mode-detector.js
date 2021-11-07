
import {appendPlay,appendMessage} from './game/game.controller.js';
import {setLandscape} from './events.js';

const orientation_ = screen.orientation;

if(orientation_.type.includes("portrait")){
    appendMessage("use your phone in landscape mode.", "OK", setLandscape);
}else{
    appendPlay();    
}

orientation_.onchange=()=>{
   if(orientation_.type.includes("landscape")){
        appendPlay();
   }else{
    appendMessage("use your phone in landscape mode.", "OK", setLandscape);
   }
}

