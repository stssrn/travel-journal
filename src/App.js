import React from 'react'

import Header from './components/Header'
import JournalEntry from './components/JournalEntry'

function App(props) {
    let bucketListElements = [];
    let visitedElements = [];
    props.entryData.forEach(element => {
        if (element.visited) {
            visitedElements.push(<JournalEntry
                                    key={element.location}
                                    {...element}
                                />)
        } else {
            bucketListElements.push(<JournalEntry
                                        key={element.location}
                                        {...element}
                                    />)
        }
    });

    return (
    <div className='container'>
        <Header />
        <main>
            <section id='visited'>
                {/* TODO: This should have a H1 but it looks ugly :(*/}
                {visitedElements.length !== 0 && visitedElements}
            </section>
            <section id='bucket-list'>
                {bucketListElements.length !== 0 && <><h1>Bucket List</h1>{bucketListElements}</>}
            </section>
        </main>
        <footer>
            stssrn.dev
        </footer>
    </div>
    );
}

export default App