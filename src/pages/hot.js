import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Item from "../components/item"
import Aside from "../components/aside"
import Qr from "../components/qr"
import Top from "../components/top"
import Style from "../styles/index.module.css"
import SEO from "../components/seo"
import jsonData from "../../content/read.json"

export default () => (
    <Layout>
       <SEO title="热门图片" description="" />
        <Content>
            <div className={Style.list}>
                {
                    jsonData.map((value, index) => (
                        <Item key={index} obj={value} />
                    ))
                }
            </div>
            <Aside>
                <div>
                    <Qr />
                    <Top />
                </div>
            </Aside>
        </Content>
    </Layout>
)
