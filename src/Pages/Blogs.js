import React from 'react';
import Footer from './Shared/Footer';

const Blogs = () => {
    return (
        <div className='mt-5'>
      <h2 className='text-center text-3xl text-secondary font-bold'>Blogs</h2>
      <div className='my-4'>
      <div class="card lg:card-side bg-base-100 shadow-xl mb-5">

<div class="card-body">
  <h2 className="card-title text-3xl text-accent">How will you improve the performance of a React Application?</h2>
  <p className='text-2xl'>1. Using Immutable Data Structures.
    <br></br>
    2. Function/Stateless Components and React.PureComponent.
    <br></br>
    3. Multiple Chunk Files.
    <br></br>
    4. Using Production Mode Flag in Webpack.
    <br></br>
    5. Dependency optimization.
    <br></br>
    6. Use React.Fragments to Avoid Additional HTML Element Wrappers.
    <br></br>
    7. Avoid Inline Function Definition in the Render Function.
    <br></br>
    8. Avoid using Index as Key for map.
  </p>

</div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl mb-5">

<div class="card-body">
  <h2 className="card-title text-3xl text-accent">What are the different ways to manage a state in a React application?</h2>
  <p className='text-2xl'>
    1. Local (UI) state - Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.
    <br></br>
    2. Global (UI) state - Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
    <br></br>
    3. Server state - Data that comes from an external server that must be integrated with our UI state.
    <br></br>
    4. URL state - Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
    In many cases, a lot of major parts of our application rely upon accessing URL state.
  </p>

</div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl mb-5">

<div class="card-body">
  <h2 className="card-title text-3xl text-accent">How does prototypical inheritance work?</h2>
  <p className='text-2xl'>In a class-based model, we have Classes, which are represented by the triple “Parents, Variables, Methods”. Where:

    Parents is the list of classes we’re extending. Classes may only extend other classes;
    Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y) ” has 2 instance variables;
    Methods is a table of “name → function” that describes which services each instance of the class will support;
    Instances (or Objects) in a class-based model are represented with the tuple “Class, Values”. Where:

    Class is a pointer to the class triple that defines how many variables this instance supports, and what methods we can call on it;
    Values is a list of the values for each variable the instance has.
    In this model, Classes only describe how instances look like, and Instances are the only thing we can interact with. Classes cannot be instances, and we can’t inherit from Instances.
  </p>

</div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl mb-5">

<div class="card-body">
  <h2 className="card-title text-3xl text-accent">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
  <p className='text-2xl'>
    useState is simply a state updating function. Const is used here because the change of value is being managed somewhere else by React. We're telling React to manage some value for us by calling useState. We use setProducts instead of products = [...] because setProducts is an array in useState that can be changed by changing the state. Instead if we use products = [...] it will be little harder set the array while changing data. 
  </p>

</div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl mb-5">

<div class="card-body">
  <h2 className="card-title text-3xl text-accent">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
  <p className='text-2xl'>
    To find the product name in an array, We have to map the array of products then we will find single product. We pass dynamically key=service_id to avoid warning and product=product.In another div if we write product.name dynamically then we will find the product names dynamically. 
  
  </p>

</div>
</div>

<div class="card lg:card-side bg-base-100 shadow-xl">
<div class="card-body">
  <h2 className="card-title text-3xl text-accent">What is a unit test? Why should write unit tests?</h2>
  <p className='text-2xl'>
  UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. 
  <br></br>
  1. Unit tests help to fix bugs early in the development cycle and save costs.
  <br></br>
2. It helps the developers to understand the testing code base and enables them to make changes quickly.
<br></br>
3. Good unit tests serve as project documentation. 
<br></br>
4. Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
  
  </p>

</div>
</div>
      </div>

     <Footer></Footer>
      </div>
    );
};

export default Blogs;