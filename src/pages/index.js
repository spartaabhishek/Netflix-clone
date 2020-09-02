import React, { Component } from 'react'
import Header from '../Components/Header'
import TabComponents from '../Components/TabComponent'
import Footer from '../Components/Footer'
 class Main extends Component {
    render() {
        return (
            <div>
              <Header/>    
              <TabComponents/>
              <Footer></Footer>
            </div>
        )
    }
}
export default Main;