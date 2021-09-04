import './Home.css'
import React, { useEffect, useState } from 'react'
import {
    IoMdHeart,
    IoMdHeartEmpty
} from 'react-icons/io'
import {
    Link
} from 'react-router-dom'

const initialState = {
    list: []
}

export const Home = () => {
    const [button, setButton] = useState(initialState)
    
    useEffect(() => {
        setButton([
            {
                name: 'heart',
                color: 'red',
                sprites: <IoMdHeart/>
            },
            {
                name: 'heartEmpty',
                color: 'red',
                sprites: <IoMdHeartEmpty/>
            },
        ])
    }, [])

    return (
        <>  
            <div className="favorites">
                <h1>
                    Favorites
                </h1>
                <div className="container">
                    {
                        button.length && (
                            button.map(({name, color, sprites}, key) => {
                                return (
                                    <div className={`card ${color}`} key={key}>
                                        <span>
                                            {name}
                                        </span>
                                        <i>
                                            {sprites}
                                        </i>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
            <div>
                <Link to="/favorite">
                    Go to favorite!
                </Link>
            </div>
        </>
    )
}