export default function Movies({data}){
    return (
        <div>
            <div>
                <Read/>
                <Button/>
                <SelectBox/>
            </div>
            <div>
                {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- <img src={m.Poster} width="200"></img></div>)}               
            </div>
            </div>

    )

}

export function Read(){
    
    return(<input id="pesquisa"></input>)
}

export function Button(){
    return(
    <button>Pesquisar</button>)
}

export function SelectBox(){
    return(
            <select id="select">
            <option value="i">Ano</option>
            <option value="s" selected>titulo</option>
        </select>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`http://www.omdbapi.com/?apikey=dc417e24&s=bagdad`)
  
    const data = await res.json()
  
    return {
  
        props: {  
            data
        }
    }
  }
