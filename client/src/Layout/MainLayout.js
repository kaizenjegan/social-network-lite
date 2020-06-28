import React from "react"
import {Header} from './Header';
import {Footer} from './Footer';

export const MainLayout = (props) =>{
    return(
        <div>
            <Header />
            {/* {this.props.children} */}
                {props.children}
            <Footer {...props} />
        </div>
    )
}