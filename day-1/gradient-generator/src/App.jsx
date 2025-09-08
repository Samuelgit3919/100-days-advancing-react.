import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const [num, setNum] = useState(12)
  const [type, setType] = useState('linear')
  const [gradient, setGradient] = useState([])

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255
    const random = Math.floor(Math.random() * rgb)
    const hexColor = random.toString(16)
    const colorHex = hexColor.padEnd(6, '0')
    const colorWithHash = `#${colorHex}`
    console.log(colorWithHash)
    return colorWithHash

  }

  const generateGradient = () => {
    const colors = [];

    for (let i = 0; i < num; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;
      colors.push({
        gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`
        ,
        css: `background:  'linear-gradient(${degreeString}, ${color1}, ${color2})'`,
      })
    }
    setGradient(colors)
  }

  const oncopy = (css) => {
    navigator.clipboard.writeText(css)
    toast.success("Gradient code copied !", { position: 'top-center' })
  }



  useEffect(() => {
    generateGradient()
  }, [num])


  return (
    <div className='min-h-screen bg-white py-12'>
      <div className="w-9/12 mx-auto ">
        <div className='flex justify-between '>
          <h1 className='text-3xl font-bold'>
            🎨 Gradient Generator {num} {type}
          </h1>
          <div className='flex gap-4'>
            <input
              value={num}
              className='border border-slate-300 bg-white rounded-lg w-[100px] p-2'
              placeholder='12'
              onChange={(e) => setNum(Number(e.target.value))}
            />
            <select value={type} onChange={(e) => setType(e.target.value)} name="" id="" className='border border-gray-300 bg-white rounded-lg w-[100px] p-2'>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mt-2'>
          {
            gradient.map((color, index) => (
              <div
                key={index}
                style={{ background: color.gradient }}
                className='h-[180px]  rounded-xl relative'>
                <button onClick={() => oncopy(color.css)} className='bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 text-[10px] py-1 px-2 '>Copy</button>
              </div>
            ))
          }
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App