import './Favorite.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    useSelector,
    useDispatch
} from 'react-redux'
import { isToggleOn } from './favoriteSlice'
import { Icons } from './Icons'

export const Favorite = () => {
    const favorites = useSelector(state => Object.values(state.favorites))
    const dispatch = useDispatch()
    
    return (
        <>
            <div className="favorite">
                <h1>
                    Icons
                </h1>
                <div className="container">
                    {
                        favorites.map((favorite, key) => {
                            return (
                                <div className="card" key={key}>
                                    <button className={`btn ${favorite.toggle && (favorite.color)}`} onClick={() => dispatch(isToggleOn(favorite))}>
                                        <span>
                                            {
                                                favorite.name
                                            }
                                        </span>
                                        <i>
                                            {
                                                !favorite.toggle && (
                                                    <Icons type={favorite.icons?.before}/>
                                                )
                                            }
                                            {
                                                favorite.toggle && (
                                                    <Icons type={favorite.icons?.after}/>
                                                )
                                            }
                                        </i>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <Link to="/">
                    Go to Home!
                </Link>
            </div>
        </>
    )
}