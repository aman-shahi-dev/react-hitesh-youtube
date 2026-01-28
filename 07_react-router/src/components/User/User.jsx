import React from 'react'
import { useParams } from 'react-router-dom';

function User() {

    const {userid} = useParams()

    return (
    <div className="
        w-full flex flex-1 border bg-gray-600 text-white text-xl md:text-4xl p-4 items-center justify-center
    ">
        User: {userid}
    </div>
    );
}

export default User