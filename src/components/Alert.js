import React, {useEffect} from 'react'
import { motion } from "framer-motion"
import { IoMdClose } from "react-icons/io"

const Alert = ({ alert, setAlert }) => {
    useEffect(() => {
        setTimeout(() => {
            setAlert(null);
        }, 4000);
    })
    
    return (
        <motion.div className="alert" initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <span className="alert-msg">{alert}</span><span className="icon-close" onClick={() => setAlert(null)}><IoMdClose/></span>
        </motion.div>
    )
}

export default Alert
