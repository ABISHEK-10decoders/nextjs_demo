import React from 'react'
import { useRouter } from 'next/router'

const Check = () => {
    const router = useRouter();
    console.log(router.query);

    return (
        <div>
            <h2> Check Hello</h2>
        </div>
    )
}

export default Check;