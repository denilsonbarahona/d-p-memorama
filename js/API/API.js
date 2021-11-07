const API ='https://rickandmortyapi.com/api/';

export async function getCharacter(page){
    try {
        const raw = await fetch(`${API}character?page=${19}`);
        const characters = await raw.json(); 
        return {error: false, ...characters.results};
    } catch(error) { 
        return {error: true};
    }
}

export async function getOrigin(origin){
    try {
        const raw = await fetch(origin);
        const dimension = await raw.json();
        return {error: false, ...dimension};
    } catch(error) {
        return {error: true};
    }
}