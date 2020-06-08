import React from "react"
import {Header} from './Header';
import {Footer} from './Footer';

export const Layout = (props) =>{
    return(
        <div>
            <Header />
            {/* {this.props.children} */}
                {props.children}
            <Footer />
        </div>
    )
}