const API ='https://rickandmortyapi.com/api/';

export async function getCharacter(page){
  try {
        const raw = await fetch(`${API}character?page=${page}`,{ method : "GET",mode: 'cors', headers: {} });
        const characters = await raw.json(); 
        return {error: false, ...characters.results};
    } catch(error) { 
        throw Error("API FAIL")
    }
}

export async function getOrigin(origin){
    if(origin.trim()!=="") {
        try {
            const raw = await fetch(origin, { method : "GET",mode: 'cors', headers: {} });
            const dimension = await raw.json();
            return {error: false, ...dimension};
        } catch(error) { 
            throw Error("API FAIL")
        }
    }
    return {error: true};
}