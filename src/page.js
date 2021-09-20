import React from 'react';
import { NxApiService } from 'axit-new-test-1';

function Page() {
    return (
        <div>
            <button onClick={() => {
                NxApiService.POST({
                    url : 'login',
                    data : {
                        email : 'h@mail.com',
                        password: '123'
                    }
                })
            }}>GET</button>
            <button>Put</button>
        </div>
    )
}

export default Page