import React from 'react'
import { useParams } from 'react-router-dom'

const styles = {
    Username: {
        color: "#02B589",
        fontFamily: "Ubuntu",
        fontWeight: "700",
        fontSize: "20px",
        marginRight: "44px",
        cursor: "pointer"
    },
}
function Username() {
    const { id } = useParams()
    return (
        <div style={styles.Username}>{id}</div>
    )
}

export default Username