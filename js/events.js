
import {
  appendLoader, 
  CheckPair, 
  appendMessage, 
  removeModal,
  setReward, 
  reduceLives,
  foundedCounter
} from './game/game.controller.js';


function handlePairs(id, callback){
  const isPair = CheckPair(id);
  if(isPair===0) {
    appendMessage("¡Be careful!, this is not the correct pair.",'OK',callback, false)    
    setReward(-10);
    reduceLives();
  }else if(isPair === 1) {
    appendMessage("Congratulations! You have found a pair.",'OK',()=>removeModal(), false)    
    setReward(50);
    foundedCounter();
  } 
}
    
    
function removeOpen(){   
  removeModal();
  setTimeout(()=>{
      this.parent.classList.remove("card-group--isopen")
      this.previous?.classList.remove("card-group--isopen")
    },100);
}

export function setLandscape(){    
    const $document = document.documentElement;
    if($document.requestFullscreen) {
      $document.requestFullscreen();
    }else if($document.mozRequestFullScreen) {
      $document.mozRequestFullScreen()
    }
    else if($document.webkitRequestFullScreen) {
      $document.webkitRequestFullScreen()
    }
    else if($document.msRequestFullScreen) {
      $document.msRequestFullScreen()
    }
    screen.orientation.lock("landscape");
}

export function setLoaderUi(){
  appendLoader(); 
}

var prev;
export function setCardOpen(e, id){ 

  function gettingContainer(node){
    if( node.parentNode.className.includes("card-group") )
      return node.parentNode;
    
    return gettingContainer(node.parentNode)
  }

  const parent = gettingContainer(e.target)
  const callback = removeOpen.bind({previous: prev, parent: parent})

  if(parent.className.includes("card-group--isopen"))
    return;

  if(parent) 
    parent.classList.add("card-group--isopen")
  
  handlePairs(id, callback)

  prev = parent;
}

export function reStartGame(){
  window.location.reload();
}


