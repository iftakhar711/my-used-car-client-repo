import React from 'react';

const Blogs = () => {
    return (
        <div className='sm:w-96 md:w-[600px] lg:w-[1000px] mx-auto mt-16'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> Different ways to manage a state in a React application:<br />
                        .React Component Props.<br />
                        .React Context.<br />
                        .Redux state management.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage. All the JavaScript objects inherit properties and methods from a prototype
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> Let’s start with the definition: Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4.  React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework. They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;