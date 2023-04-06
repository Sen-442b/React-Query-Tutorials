import axios from "axios"
import { useQuery } from "react-query"


const fetchSuperHeroes= ()=>{
  return axios.get("http://localhost:4000/superheroes")
}
export const RQSuperHeroesPage = () => {
 const results= useQuery("super-heros",fetchSuperHeroes,{refetchInterval:2000,refetchIntervalInBackground:true})
 const {isLoading,data, isError,error,isFetching}=results
  console.log({isFetching, isLoading})
 if(isLoading){
  return <p>Loading...</p>
 }

 if(isError){
  return <p>{error.message}</p>
 }

  return <div>
    {data?.data.map(hero=><p key={hero.id}>{hero.name}</p>)}
  </div>
}
