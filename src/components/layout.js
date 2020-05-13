import React from "react"
import Footer from "./footer"
import Friendlinks from "./friendlinks"

export default ({children}) => (
    <div style={{
        margin: `0`,
        padding: `0`
    }}>
        {children}
        <Friendlinks />
        <Footer />
    </div>
)