import React from 'react'

const App = () => {
  return (
    <div className='bg-gradient-to-br text-white from-slate-900 via-slate-800 to-slate-900 min-h-screen flex justify-center items-center '>
      <div className='flex gap-6 flex-col items-center w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWfsxXJE-q6tDJ2hvRHJcL3HsD--WPYJuNg&s" alt=""
          className='w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover'
        />
        <div className='text-center text-white tracking-wide'>
          <h1 className='text-3xl font-medium '>Avatar Generator</h1>
          <p className='text-slate-300'>Generate unlimited avatars for your website</p>
        </div>
        <div className='w-full space-y-4'>
          <select name="" id="" className='bg-slate-900/60 w-full p-3 rounded-xl'>
            <option value="">Male</option>
          </select>

          <div className='bg-slate-900/60 w-full p-3 rounded-xl'>
            sami
          </div>
        </div>
      </div>
    </div>
  )
}

export default App