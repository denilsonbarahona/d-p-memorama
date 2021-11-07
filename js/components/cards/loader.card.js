import createDom from '../../lib/createDOM.js'; 


export function LoaderCard(){
    const loader = `<div class="card card--isLoader">
                        <div class="card-img-container">
                            <img src="./img/loader.png" width="128" height="128" alt="Rick and Morty's loader" class="card-img">
                        </div>
                        <div class="loading">
                            <p>Loading</p>
                            <div class="loading-dots">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                        
                    </div>>`;
    return createDom(loader);    
}
