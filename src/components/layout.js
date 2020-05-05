import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({children}) => (
    <div style={{
        margin: `0`,
        padding: `0`
    }}>
        <Header />
        {children}
        <Footer />
    </div>
)