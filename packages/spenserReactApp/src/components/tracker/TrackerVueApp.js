import { mount } from 'trackerVue/TrackerVueApp'
import React, { useRef, useEffect } from 'react'
import LoggedInNav from '../common/LoggedInNav';
import AuthContext from "../../context/auth-context";
import {useContext} from 'react';


export default () => {
    const ref = useRef(null);
    const auth = useContext(AuthContext)

    // console.log(auth)

    useEffect(() => {
        mount(ref.current, auth)
    }, [])

    return(
        <div>
            <LoggedInNav/>
            <div ref={ref} />
        </div>
    )
}