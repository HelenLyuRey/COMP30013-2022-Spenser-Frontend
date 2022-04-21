import { mount } from 'trackerVue/TrackerVueApp'
import React, { useRef, useEffect } from 'react'
import LoggedInNav from '../common/LoggedInNav';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, [])

    return(
        <div>
            <LoggedInNav/>
            <div ref={ref} />
        </div>
    )
}