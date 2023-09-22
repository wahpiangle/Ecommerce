'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Title from './components/Title';
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import Button from './components/Button';
import GoogleSocialButton from './components/GoogleSocialButton';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [formVariant, setFormVariant] = useState('REGISTER');
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/')
    }
  }, [session?.status, router])

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  })

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (formVariant === 'REGISTER') {
      axios.post('/api/register', data) //submits data to api/register
        .then(() => signIn('credentials', data))
        .then(() => toast.success('Registered successfully!'))
        .catch((error) => {
          if (error) {
            toast.error('Something went wrong!') //create a toast for error
          }
        }
        )
        .finally(() => setIsLoading(false));
    }

    if (formVariant === 'LOGIN') {
      signIn('credentials', {
        ...data, //sprad data to pass email and password
        redirect: false,
      })
        .then((callback) => {
          if (callback.error) {
            toast.error('Invalid Credentials');
          }
          if (callback.ok && !callback?.error) {
            toast.success('Logged in successfully!');
          }
        })
        .finally(() => setIsLoading(false))
    }
  }

  const toggleVaraint = () => {
    if (formVariant === 'LOGIN') {
      setFormVariant('REGISTER');
    } else {
      setFormVariant('LOGIN');
    }
  }

  const socialAction = (action) => {
    setIsLoading(true);
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Something went wrong!');
        }
        if (callback?.ok && !callback?.error) {
          toast.success('Logged in successfully!');
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className='bg-primary min-h-screen'>
      <Link className='absolute ml-4 my-4' href='/'>
        <Image
          src='/assets/logo-updated.png'
          width={200}
          height={60}
          alt='propdash'
          key='propdash'
        />
      </Link>
      <div className='text-primaryText grid md:grid-cols-2 min-h-screen'>
        <div className='px-16 pt-16'>
          {formVariant === 'REGISTER' && (
            <Title text={'Create an Account'} subtitle={'Hi there! Create an account to view the dashboard.'} />
          )}
          {formVariant === 'LOGIN' && (
            <Title text={'Login'} subtitle={'Welcome back! Please enter your details.'} />
          )}
          <div className='my-6'>
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
            <div className="mt-4 justify-center flex">
              <GoogleSocialButton
                icon="/assets/google.png"
                onClick={() => { socialAction('google') }}
              />
            </div>
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
        <div className='justify-center relative md:flex hidden min-h-full'>
          <Image
            className='object-cover'
            src='/assets/signup-building.jpg'
            fill='true'
            alt='Skyscraper'
            sizes='auto'
          />
        </div>
      </div>
    </div>
  )
}

export default Signup