import {useState, useEffect} from 'react'
import { Loading } from '../components'
import {Link} from "react-router-dom"

export default function Crew() {

    const [crew,setCrew] = useState([])
    useEffect(()=>{
    const fetchCrew = async() =>{
        const res = await fetch("https://api.spacexdata.com/v4/crew")
        const data = await res.json()
        setCrew(data)
    }
    fetchCrew()
  },[])
  
    return (
    <>
    {!crew ? <Loading/> : 
    <section className='py-32'>
        <h1 className='heading text-center mb-10'>Crew</h1>

        <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {crew.map(({ id, name, image})=>(
                <Link key={id} to={`/crew/${id}`}>
                    <article className='relative'>
                    <img src={image} alt={name} loading="lazy"
                    className="h-96 w-full object-cover"/>
                    <h1 className='absolute bottom-5 left-5 font-bold text-white text-xl tracking-wide'>{name}</h1>
            </article>
                </Link>
            ))}
        </div>

    </section>
    }
    </>
  )
}
