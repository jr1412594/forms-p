import React from 'react'
import FlintstoneCard from './FlintstoneCard'

export default function FlintstoneSection(props) {

    const displayFlintstones = () => {
        return props.flintstones.map(flintstone => {
            return <FlintstoneCard flintstone={flintstone} key={flintstone.name}/>
        })
    }
    return (
        <section className="flntstone-section">
            {displayFlintstones()}
        </section>
    )
}
