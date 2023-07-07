import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine'

const ChatsPage = (props) => {
  
    const chatProps = useMultiChatLogic('759b8285-4c53-4825-88f8-f05b76fb4405', props.user.username, props.user.secret)
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
    )
  
}

export default ChatsPage