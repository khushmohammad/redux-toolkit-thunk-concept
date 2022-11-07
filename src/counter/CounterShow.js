import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Postlist from '../components/Postlist'
import CounterCount from './CounterCount'


function CounterShow() {
    const count = useSelector((state) => state.counter.value)
    // const [count, setcount] = useState(0)
    return (
        <div>
            {count}
            <CounterCount />
            <Postlist />
        </div>
    )
}

export default CounterShow