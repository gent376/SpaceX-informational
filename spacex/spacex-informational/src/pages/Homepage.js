// import React from 'react'
import { useState, useEffect } from "react"
import { Loading } from "../components"

export default function Homepage() {

    const[company,setCompany] = useState (null) 

    useEffect(() =>{
        const fetchCompany =async() =>{
            const res = await fetch("https://api.spacexdata.com/v4/company")
            const data=await res.json()
            setCompany(data)
        }
        fetchCompany()
    }, [])
    return (
       <>
       {!company ? <Loading /> : 
       <section className="showcase">
            <div className="overlay">
                <article className="text-white">
                    <h1 className="heading text-center capitalize">SpaceX Data</h1>

                    
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto mt-10 lg:gap-20">
                    <article>
                        <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">About</h2>
                        <ul className="text-sm opacity-75">
                            <li className="mb-1">{company.name} was founded by </li>
                            <li className="mb-1">{company.founder} in {company.founded}</li>
                            <li className="mb-1">It has {company.employees} employees,</li>
                            <li className="mb-1">{company.vehicles} space vehicles,</li>
                            <li className="mb-1">{company.launch_sites} launch sites,</li>
                            <li className="mb-1">and {company.test_sites} test sites.</li>
                            <li className="mb-1">Valued at {company.valuation.toLocaleString()}B</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Headquarters</h2>
                        <ul className="text-sm opacity-75">
                            <li className="mb-1">{company.headquarters.address}</li>
                            <li className="mb-1">{company.headquarters.city}, {company.headquarters.state}</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="font-bold border-b-2 border-white text-xl mb-3 pb-2 uppercase tracking-wider">Useful Links</h2>
                        <ul className="text-sm opaciry-75">
                            <li className="mb-1"><a href={company.links.website}>Website</a></li>
                            <li className="mb-1"><a href={company.links.flickr}>Flickr</a></li>
                            <li className="mb-1"><a href={company.links.twitter}>Twitter</a></li>
                            <li className="mb-1"><a href={company.links.elon_twitter}>Elon Musk's Twitter</a></li>
                        </ul>
                    </article>
                    </div>

                    <p className="max-w-3xl mx-auto text-center mt-10">{company.summary}</p>
                </article>
            </div>
            <div className="overlay-nr2">
                <article className="container text-white">
                    <h1 className="heading text-center capitalize mb-10">Capsules</h1>

                    
                    <div className="text-center">
                    <article>
                        <button>
                            <a href="/capsules">LEARN MORE</a>
                        </button>
                    </article>
            </div>
            </article>
            </div>
            <div className="overlay-nr3">
                <article className="container text-white">
                    <h1 className="heading text-center capitalize mb-10">Cores</h1>

                    
                    <div className="text-center">
                    <article>
                    <button>
                            <a href="/cores">LEARN MORE</a>
                        </button>
                    </article>
            </div>
            </article>
            </div>
            <div className="overlay-nr4">
                <article className="container text-white">
                    <h1 className="heading text-center capitalize mb-10">Crew</h1>

                    
                    <div className="text-center">
                    <article>
                    <button>
                            <a href="/crew">LEARN MORE</a>
                        </button>
                    </article>
            </div>
            </article>
            </div>
            <div className="overlay-nr5">
                <article className="container text-white">
                    <h1 className="heading text-center capitalize mb-10">Dragons</h1>

                    
                    <div className="text-center">
                    <article>
                    <button>
                            <a href="/dragons">LEARN MORE</a>
                        </button>
                    </article>
            </div>
            </article>
            </div>
        </section>}
       </>
  )
}
