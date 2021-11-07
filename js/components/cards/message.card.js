import createDom from '../../lib/createDOM.js'; 

export function MessageCard(message, actionMsj){
    const card = `<dialog class="modal" id="modal">
                    <div class="card">
                        <div class="logo logo--gt">
                            <img src="./img/Rick_and_Morty_-_logo.png" width="73" height="24" alt="Rick and Morty's memorama" class="logo-img">
                        </div>
                        <p>${message}</p>
                        
                        <button id="action" class="button">
                            ${actionMsj}
                        </button>
                    </div>
                </dialog>`;
    return createDom(card);
}
