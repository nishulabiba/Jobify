import React from 'react';

const Blog = () => {
    return (
        <div className='bg-white text-black'>
            <div className="p-5 bg-purple-200 mb-5 mx-5 rounded-lg">
                <h1 className='text-xl font-semibold m-3'>a. When should you use context API?</h1>
                <p className='text-slate-500'>The Context API in React should be used when data that needs to be shared across multiple components in application, and passing the data down through the component tree becomes too cumbersome.</p>
            </div>
            <div className="p-5 bg-purple-200 m-5 rounded-lg">
                <h1 className='text-xl font-semibold m-3'>b. What is a custom hook?</h1>
                <p className='text-slate-500'>Custom hooks are a powerful tool for code reuse in React and can help to simplify components and make your code more modular and maintainable.</p>
            </div>
            <div className="p-5 bg-purple-200 m-5 rounded-lg">
                <h1 className='text-xl font-semibold m-3'>c. What is useRef?</h1>
                <p className='text-slate-500'>useRef hook is used to create a mutable reference that persists across component renders. It returns a plain JavaScript object with a current property that can be used to store any value.</p>
            </div>
            <div className="p-5 bg-purple-200 mt-5 mx-5 rounded-lg">
                <h1 className='text-xl font-semibold m-3 '>d. What is useMemo?</h1>
                <p className='text-slate-500'>useMemo hook is used to memoize the result of a function so that it is only recomputed when its dependencies change. It can be used to optimize the performance of your application by avoiding unnecessary calculations.</p>
            </div>
        </div>
    );
};

export default Blog;