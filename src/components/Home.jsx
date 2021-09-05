import './Home.css'
import React from 'react'
import {
    useSelector, useDispatch
} from 'react-redux'
import {
    Link
} from 'react-router-dom'
import { Icons } from './Icons'
import { isToggleOn } from './favoriteSlice'


export const Home = () => {
    const favorites = useSelector(state => Object.values(state.favorites))
    const dispath = useDispatch()

    return (
        <>  
            <div className="favorites">
                <h1>
                    Favorites
                </h1>
                <div className="container">
                    {
                        favorites.map((favorite, key) => {
                            return (
                                <div
                                    className="card"
                                    key={key}
                                >
                                    {
                                        favorite.toggle && (
                                                <button
                                                    className={`btn ${favorite.color}`}
                                                    onClick={() => dispath(isToggleOn(favorite))}
                                                >
                                                    <span>
                                                        {favorite.name}
                                                    </span>
                                                    <i>
                                                        <Icons type={favorite.icons.after}/>
                                                    </i>
                                                </button>
                                        )
                                    }
                                </div>
                            )
                        })
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