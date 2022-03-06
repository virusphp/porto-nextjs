import React,{useState, useEffect} from 'react'
import { Switch } from '@headlessui/react'
// import Document from 'next/document'

const Welcome = () => {
  const nama = "S l a m e t  S u g a n d i"
  const img = require("../public/static/images/photo.jpg");
  const backgroundku = {
	  backgroundImage: 'url('+img+')',
  }
  const [isChecked, setDarkMode] = useState(false)
  useEffect(
  () => {
	isChecked ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
	isChecked ? document.body.classList.add('dark:bg-slate-800','dark:text-slate-200') : document.body.classList.remove('dark:bg-slate-800','dark:text-slate-200')
  },[isChecked])
  return (
    <div>
       	<div className='flex justify-center mt-10'>
		   <span className="text-sm text-slate-500 mr-2">Light</span>
		   <Switch
			checked={isChecked}
			onChange={setDarkMode}
			className={`${
				isChecked ? 'bg-slate-900' : 'bg-gray-200'
			} relative inline-flex items-center h-6 rounded-full w-11`}
			>
			<span
				className={`${
				isChecked ? 'translate-x-6' : 'translate-x-1'
				} inline-block w-4 h-4 transform bg-white rounded-full`}
			/>
			</Switch>
			<span className="text-sm text-slate-500 ml-2">Dark</span>
		</div>

		<div className='mt-4 w-60 h-60 m-auto 
			bg-slate-300 bg-cover rounded-full shadow-lg 
			shadow-slate-500 blur-sm hover:blur-none' 
			style={backgroundku}>
			<div className='w-full h-full rounded-full bg-blue-300 mix-blend-overlay'></div>
		</div>

		<div className='max-w-xl my-14 border border-slate-200 
			rounded-xl mx-auto p-4 shadow-md font-inter 
			hover:bg-sky-500 group font-mono 
			dark:group-hover:bg-slate-300'>
			<h5 className='font-bold text-slate-700 text-center text-lg mb-3 
				group-hover:text-white 
				dark:group-hover:text-slate-800'>
				{nama}
			</h5>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:uppercase first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800 '>
				Alias : Gandi
			</p>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800'>
				HOBI  : Game, Coding, Traveling
			</p>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800'>
				STUDI : SMK N 3 Pekalongan
			</p>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800'>
				GITHUB : <a href='https://github.com/virusphp' rel="noreferrer" target='_blank' className='bg-yellow-200 hover:text-slate-900'>https://github.com/virusphp</a>
			</p>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800'>
				SKILL : PHP, CSS, JS, <span className='text-green-500 group-hover:bg-red-700'>Laravel</span>, VBnet, Linux 
			</p>
			<p className='text-slate-700 group-hover:text-white 
					selection:bg-lime-300 selection:text-slate-900
					first-line:tracking-widest
					first-letter:float-left
					dark:group-hover:text-slate-800'>
				FACEBOOK : <a href='https://facebook.com/gandi.dark.heart' rel="noreferrer" target='_blank' className='bg-yellow-200 hover:text-slate-900'>https://facebook.com/gandi.dark.heart</a>
			</p>
		</div>
    </div>
  )
}

export default Welcome