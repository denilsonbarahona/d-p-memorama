import createDom from '../../lib/createDOM.js'; 


export function Board(){
    const board = `<div class="board"></div>`;
    return createDom(board);    
}