import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <div>404 Error PageNotFound</div>
                <Link to="/">Go Home Instead</Link>
            </>
        )
    }
}
