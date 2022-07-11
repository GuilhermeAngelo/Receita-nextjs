
 import {Links} from "./receita_2/pweb/pweb.js"
 import {Content} from "./receita_1/menu.js"
 
 export function MariaPrea(props){
   return(
      <h1>{props.titulo}</h1>
   )
 }
export default function Home(){

   return (
      <div>
         <MariaPrea titulo="Morreu Maria prea"/>
         <Links/>
         <Content/>
         
       </div>
 
    )
 
 }