import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    { 
        id: 1, toggle: true, name: 'Favorite', color: 'red', icons: { before: 'MdFavoriteBorder', after: 'MdFavorite'}
    },{ 
        id: 2, toggle: false, name: 'Star', color: 'yellow', icons: { before: 'MdStarBorder', after: 'MdStar' }
    },{ 
        id: 3, toggle: false, name: 'Bookmark', color: 'blue', icons: { before: 'MdBookmarkBorder', after: 'MdBookmark' }
    },{
        id: 4, toggle: false, name: 'Label', color: 'pink', icons: { before: 'MdLabelOutline', after: 'MdLabel' }
    },{
        id: 5, toggle: false, name: 'PauseCircleFilled', color: 'orange', icons: { before: 'MdPauseCircleOutline', after: 'MdPauseCircleFilled' }
    },{
        id: 6, toggle: false, name: 'PlayCircleFilled', color: 'green', icons: { before: 'MdPlayCircleOutline', after: 'MdPlayCircleFilled' }
    },{
        id: 7, toggle: false, name: 'ChatBubble', color: 'purple', icons: { before: 'MdChatBubbleOutline', after: 'MdChatBubble' } 
    }
]

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: initialState,
    reducers: {
        isToggleOn(state, {payload: {id, toggle}})
        {
            Object.values(state).filter(icon => icon.id === id && ( icon.toggle = toggle ? false: true))
        }
    }
})

export const {isToggleOn} = favoriteSlice.actions

export default favoriteSlice.reducer