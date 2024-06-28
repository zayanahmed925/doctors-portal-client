import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from '../Shared/Loading/Loading';
const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [token] = useToken(gUser || user)

    let signInError;

    if (gError || error || updateError) {
        signInError = < p className='text-red-500 mb-2' > <small>{gError?.message || error?.message}</small></p >
    }
    if (gLoading || loading || updating) {
        return <Loading></Loading>
    }

    if (token) {
        navigate('/appointment')
    }

    const onSubmit = async data => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log('updated');
        navigate('/appointment')
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center ">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text" placeholder="Enter Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                type="email" placeholder="Enter email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input
                                type="password" placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be six character or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {
                            signInError
                        }
                        <input className='btn w-full max-w-xs' value='Sign Up' type="submit" />
                    </form>
                    <p><small>Already have an Account? <Link to='/login' className='text-primary'>Please Login</Link></small></p>
                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-info">Signin With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;