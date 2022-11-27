import React from 'react';
import { Link } from 'react-router-dom';


const Errorpage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="className='w-40 h-40 text-green-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-500'>
                        <span className='sr-only'>Error</span>
                        <div className='flex justify-center items-center h-full'>
                            4
                            <div className='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
                            4
                        </div>
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8'>
                        This Page is not availabel.
                    </p>
                    <Link to='/'>
                        <button className='px-8 py-3 bg-amber-300 font-semibold rounded'>
                            Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;