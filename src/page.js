import React, { useState } from 'react';
import { NxApiService } from 'axit-new-test-1';

function Page() {
    const [data, setData] = useState({
        userName: '',
        password : "",
    })
    return (
        <div>
            <input onChange={(e) => {
                setData({...data, userName: e.target.value})
            }} value={data.userName} />
            <input onChange={(e) => {
                setData({...data, password: e.target.value})
            }} value={data.password} />
            <button onClick={() => {
                
            }}>GET</button>
            <button>Put</button>
        </div>
    )
}

export default Page