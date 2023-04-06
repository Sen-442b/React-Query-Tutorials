import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes= ()=>{
  return axios.get("http://localhost:4000/superheroes")
}
export const RQSuperHeroesPage = () => {
 const results= useQuery("super-heros",fetchSuperHeroes,{enabled:false,cacheTime:2000}) 
 const {isLoading,data, isError,error,isFetching,refetch}=results
  console.log({isFetching, isLoading})
 if(isLoading||isFetching){
  return <p>Loading...</p>
 }

 if(isError){
  return <p>{error.message}</p>
 }

  return <div>
    <button onClick={refetch}>Fetch</button>
    {data?.data.map(hero=><p key={hero.id}>{hero.name}</p>)}
  </div>
}
