import React from 'react';

const ErrorPage = () => {
    return (
        <div className='bg-[#34353a] p-5 min-h-screen space-y-5'>
            <h3 className='font-bold text-2xl'>Sorry Budy from <span className='text-orange-600'>Amdadul Haque</span> .....,</h3>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-5wYZktVs0SK5o-0fi0HYqaop8u-IxRVSg&s" alt="Sad emoji!" />
            </div>
            <h3>Don't worry, problem solve will be tomorrow insha Allah.</h3>
            <a href="/"><button className="btn btn-outline bg-gradient-to-r from-red-500 to-orange-400 text-black">Go back Home page</button></a>
        </div>
    );
};

export default ErrorPage;