import createDom from '../../../lib/createDOM.js'; 


export function PlayCard(img, species, name, gender, status, dimension){
    const card = `<div class="card-group">
                        <div class="playcard playcard--iscardfront">
                            <div class="playcard-profile">
                                <img class="playcard-img" width="137" height="108" src="${img}" alt="image of avatar">
                                <p class="playcard-tag">${species}</p>
                            </div>
                            <div class="playcard-info">
                                <h1 class="playcard-info-header">${name}</h1>
                                <div class="stadistic">
                                    <div class="stadistic-signal stadistic--yellow">
                                        <i class="stadistic-icon icon-Gender"></i>
                                    </div>
                                    <p class="stadistic-text">${gender}</p>
                                </div>
                                <div class="stadistic">
                                    <div class="stadistic-signal stadistic--green">
                                        <i class="stadistic-icon icon-Status"></i>
                                    </div>
                                    <p class="stadistic-text">${status}</p>
                                </div>
                                <div class="stadistic stadistic-bottom">
                                    <div class="stadistic-signal stadistic--blue">
                                        <i class="stadistic-icon icon-Origin"></i>
                                    </div>
                                    <p class="stadistic-text">${dimension}</p>
                                </div>
                            </div>
                        </div>    

                        <div class="playcard playcard--iscardback">
                            <img src="./img/card-back.png" width="137" height="200" alt="back side of card" class="playcardback-img">
                        </div>
                    </div>`;
    return createDom(card);    
}