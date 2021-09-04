import React from 'react'
import {
    MdStar,
    MdStarBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdBookmark,
    MdBookmarkBorder,
    MdLabel,
    MdLabelOutline,
    MdPauseCircleFilled,
    MdPauseCircleOutline,
    MdPlayCircleFilled,
    MdPlayCircleOutline,
    MdChatBubble,
    MdChatBubbleOutline
} from 'react-icons/md'

export const Icons = ({type}) => {

    const icon = () => {
        switch(type) {
            case 'MdStar':
                return <MdStar/> 
            case 'MdStarBorder':
                return <MdStarBorder/> 
            case 'MdFavorite':
                return <MdFavorite/> 
            case 'MdFavoriteBorder':
                return <MdFavoriteBorder/>
            case 'MdBookmark':
                return <MdBookmark/> 
            case 'MdBookmarkBorder':
                return <MdBookmarkBorder/>
            case 'MdLabel':
                return <MdLabel/> 
            case 'MdLabelOutline':
                return <MdLabelOutline/>
            case 'MdPauseCircleFilled':
                return <MdPauseCircleFilled/> 
            case 'MdPauseCircleOutline':
                return <MdPauseCircleOutline/>
            case 'MdPlayCircleFilled':
                return <MdPlayCircleFilled/> 
            case 'MdPlayCircleOutline':
                return <MdPlayCircleOutline/>
            case 'MdChatBubble':
                return <MdChatBubble/> 
            case 'MdChatBubbleOutline':
                return <MdChatBubbleOutline/>
            default:
                return false 
        }
    }

    return icon()
}