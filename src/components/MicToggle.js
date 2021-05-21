import React from 'react'
import { IoMdMic, IoMdMicOff } from "react-icons/io"
 
const MicToggle = ({ mic, setMic }) => {
    return (
        <div className="toggle-btn" onClick={() => setMic(!mic)}>
            {mic ? <IoMdMic /> : <IoMdMicOff />}
        </div>
    )
}

export default MicToggle
