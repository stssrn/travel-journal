import React from 'react'

import pin from '../images/pin.svg'

function JournalEntry(props) {
    return (
        <article className='entry'>
            <div className='entry__left'>
            <img className='entry__image' src={props.imageUrl}/>
            </div>
            <div className='entry__right'>
            <div className='entry__location'>
                <img src={pin}/><span className='entry__location__name'>{props.location}</span><a className='entry__location__maps-url' href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2 className='entry__title'>{props.title}</h2>
            {props.startDate && <section className='entry__date'>{props.startDate} - {props.endDate}</section>}
            <p className='entry__description'>{props.description}</p>

            </div>
        </article>
    )
}

export default JournalEntry