import React from 'react'
import {CgController} from "react-icons/cg"
import {BiText} from "react-icons/bi"
import {IoMdCut} from "react-icons/io"

const Status = ({ mode }) => {
    
    return (
        <div className="status-bar">
            <span><span className="icon-small">{ mode === "edit" && <IoMdCut/>}{ mode === "navigate" && <CgController/>}{ mode === "insert" && <BiText/>}</span>{mode}</span>
        </div>
    )
}

export default Status
