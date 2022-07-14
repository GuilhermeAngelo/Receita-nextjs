
export default function Movies({data}){
    if(!data){
        return(
            <div>
                carregando...
            </div>
        )
    }
    return (
        <div>
            <Query/>
            <div>

            {data.Search.map( (m) => <div key={m.imdbID} >{m.Title} --- {m.Year}</div>  )}               

            </div>

        </div>

    )

}

 export async function getServerSideProps(context){
    const {pesquisa} = context.query
    const res = await fetch(`http://www.omdbapi.com/?apikey=dc417e24&s=${pesquisa}`)
    console.log(`http://www.omdbapi.com/?apikey=dc417e24&s=${pesquisa}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }

export function Query(){
    return(
        <form method="get">
            <input name="pesquisa">
            </input>
            <input type="submit"></input>
        </form>
    )
}