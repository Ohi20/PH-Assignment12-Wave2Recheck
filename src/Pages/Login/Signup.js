import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let signInError;

    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    if(error || gError || updateError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if(user || gUser){
        console.log(user || gUser);
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({displayName: data.name});
        console.log('updated');
        navigate('/purchase');
    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div class="card lg:card-side bg-base-100 shadow-xl">
 
  <div class="card-body">
    <h2 class="card-title text-center text-2xl font-bold">Sign Up</h2>
    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
    
  </label>
  <input 
  type="email" 
  placeholder="Your Email" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email", {
      required: {
          value: true,
          massage: 'email required'
      },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Please Give a Valid Email' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
   
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Name</span>
    
  </label>
  <input 
  type="text" 
  placeholder="Your Name" 
  class="input input-bordered w-full max-w-xs" 
  {...register("name", {
      required: {
          value: true,
          massage: 'Name required'
      }
    
  })}
  />
  <label class="label">
  {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
  
   
   
  </label>
</div>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
    
  </label>
  <input 
  type="password" 
  placeholder="Password" 
  class="input input-bordered w-full max-w-xs" 
  {...register("password", {
      required: {
          value: true,
          massage: 'password required'
      },
      minLength: {
      value: 6,
      message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
    }
  })}
  />
  <label class="label">
  {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
   
   
  </label>
</div>

     
      {signInError}
      <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
    </form>
    <p><small>Already have an Account? <Link className='text-primary' to="/login">Please Login</Link></small></p>
    <div class="divider">OR</div>
    <button onClick={() => signInWithGoogle()} 
    className='btn btn-outline'>Continue with Google</button>
  </div>
</div>
        </div>
    );
};

export default Signup;