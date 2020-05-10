import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Item from "../components/item"
import Aside from "../components/aside"
import Qr from "../components/qr"
import Top from "../components/top"
import Page from "../components/page"
import Range from "../components/range"
import SEO from "../components/seo"
import Header from "../components/header"
import Style from "../styles/index.module.css"

export default ({pageContext: {data, length}}) => (
    <Layout>
        <SEO title={`${data.title}-妹子gif`} description="" />
        <Header />
        <Content>
            <div className={Style.list}>
                <Item obj={data} />
                <Page now={data.id} count={length} />
                <Range now={data.id} count={length} />
            </div>
            <Aside>
                <Qr />
                <Top />
            </Aside>
        </Content>
    </Layout>
)
