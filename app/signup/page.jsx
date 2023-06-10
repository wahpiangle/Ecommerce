'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Title from './components/Title';
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import Button from './components/Button';

const Signup = () => {
  const [formVariant, setFormVariant] = useState('REGISTER');
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = async () => {
    return;
  }

  const toggleVaraint = () =>{
    if(formVariant === 'LOGIN'){
      setFormVariant('REGISTER');
    }else{
      setFormVariant('LOGIN');
    }
  }

  return (
    <div className='bg-primary min-h-screen text-primaryText grid md:grid-cols-2'>
      <div className='px-16 py-8'>
        {formVariant === 'REGISTER' && (
          <Title text={'Create an Account'} subtitle={'Hi there! Create an account to view the dashboard.'} />
        )}
        {formVariant === 'LOGIN' && (
          <Title text={'Login'} subtitle={'Welcome back! Please enter your details.'} />
        )}
        <div className='my-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formVariant === 'REGISTER' && (
              <Input label='Name' id='name' type='text' register={register} disabled={isLoading} placeholder="Enter your name" />
            )}
            <Input label='Email' id='email' type='email' register={register} disabled={isLoading} placeholder="john@example.com" />
            <Input label='Password' id='password' type='password' register={register} disabled={isLoading} placeholder="********" />
            <div className='mt-6'>
              <Button disabled={isLoading} type="submit">
                {formVariant === 'REGISTER' ? 'Sign Up' : 'Login'}
              </Button>
            </div>
          </form>
          <div className='flex mt-2 text-secondaryText justify-center gap-1'>
            <div>
              {formVariant === 'LOGIN' ? "Don't have an account?" : "Already have an account?"}
            </div>
            <div onClick={toggleVaraint} className="underline cursor-pointer text-blueText">
              {formVariant === 'LOGIN' ? "Sign up now!" : "Login"}
            </div>
          </div>
        </div>
      </div>
      <div className='justify-center relative md:flex hidden'>
        <Image
          className='object-cover'
          src='/assets/signup-building.jpg'
          fill='true'
          alt='Skyscraper'
        />
      </div>
    </div>
  )
}

export default Signup