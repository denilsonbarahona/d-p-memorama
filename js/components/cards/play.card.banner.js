import createDom from '../../lib/createDOM.js'; 


export function PlayBanerCar(){
    const toPlay = `<dialog class="modal modal--bg" id="modal">
                        <div class="card card--isbanner">  
                            <div class="card-header">
                                <div class="logo">
                                    <img src="./img/Rick_and_Morty_-_logo.png" width="73" height="24" alt="Rick and Morty's memorama" class="logo-img">
                                </div>
                                <button id="play" class="button">
                                    PLAY
                                </button>        
                            </div>      
                            <img class="card-bg" src="./img/start-point.png" width="350" height="250" alt="started point">
                        </div>
                    </dialog>`;
    return createDom(toPlay);    
}
