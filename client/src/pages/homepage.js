import React from 'react'
import {Link} from 'react-router-dom';
function Homepage(){

    return(
        <>
            <h1>FABRIC PAGE</h1>
            <Link to='/logout'>Logout</Link>
        </>
    )
}
export default Homepage