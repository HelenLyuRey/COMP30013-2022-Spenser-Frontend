import { mount } from 'trackerVue/TrackerVueApp'
import React, { useRef, useEffect, useState } from 'react'
import LoggedInNav from '../common/LoggedInNav';
import AuthContext from "../../context/auth-context";
import {useContext} from 'react';
import conn from '../../util/conn'


export default () => {
    const ref = useRef(null);
    const auth = useContext(AuthContext);
    const voice = sessionStorage.getItem("voiceName")

    useEffect(() => {
        mount(ref.current, auth, voice)
    }, [])

    return(
        <div>
            <LoggedInNav/>
            {/* For passing it to Vue */}
            <div ref={ref} />
        </div>
    )
}