import CheckBoxes from '@/components/checkboxes'
import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';

export default function Home() {
  const [password, setPassword] = useState('');
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const values = [10, 25, 50, 75, 100];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStepIndex(Number(e.currentTarget.value));
  };
  return (
    <div className='w-full flex h-screen'>
      <div className=' bg-black mx-auto justify-center items-center h-[80%] mt-10 w-[60%]'>
        <div className='bg-[#24232B] w-[60%] mx-auto mt-[24px] '>
          <div className='flex justify-between mb-[32px] mx-5'>
            <p className='text-white  items-center mt-[24px] text-[20px] font-[700]'>PS3&SVBIA</p>
            <Image className='cursor-pointer mr-5' src='/icon.svg' height={30} width={30} alt='' />
          </div>
          <div className='items-center  mx-5  pb-[24px]'>
            <div className='flex justify-between  '>
              <p className='text-[#707070] text-[20px] font-[700]'>Character Length</p>
              <p className='mr-5 text-white font-[700]'>{values[currentStepIndex]}</p>
            </div>
            <div>

              <input
                onInput={handleInputChange}
                className="h-1.5 w-full cursor-pointer  rounded-lg border-transparent accent-[#2A8B8B]"
                type="range"
                min="0"
                value={currentStepIndex}
                max="4"
              />
            </div>
            <CheckBoxes />
            <div className='bg-gray-600 p-4 rounded-lg w-[80%] mx-auto mt-5'>
              <div className='flex justify-between'>
                <p className='text-gray-300 mx-5'>STRENGTH</p>
                <input type="password" id="password" onChange={handlePasswordChange} className='h-5 w-full'/>
                <PasswordStrengthBar barColors={["#ddd", '#8A0000', '#E78B01', '#E78B01', '#46924E']} className='h-10 w-full mx-4' scoreWordClassName='flex justify-center'
                  shortScoreWord={false} scoreWords={['Too short', 'Poor', 'Medium', 'Mediun', 'Strong']} password={password} />
              </div>
            </div>
            <div className='bg-[#2A8B8B]  cursor-pointer p-4 rounded-lg w-[80%] mx-auto mt-5'>
              <div className='flex justify-center'>
                <p className='text-white'>GENERATE</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
