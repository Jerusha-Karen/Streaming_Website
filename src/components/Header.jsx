import React, { useState } from 'react';
import logo from './../assets/images/logo.png';
import avatar from './../assets/images/avatar.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItem from './HeaderItem';
import QuizModal from './Quiz'; // Import Quiz Modal Component

function Header() {
  const [toggle, setToggle] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false); // State to control Quiz Modal visibility

  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'WATCHLIST', icon: HiPlus },
    { name: 'MOVIES', icon: HiPlayCircle },
    { name: 'SERIES', icon: HiTv },
  ];

  const openQuizModal = () => setIsQuizModalOpen(true); // Function to open the quiz modal
  const closeQuizModal = () => setIsQuizModalOpen(false); // Function to close the quiz modal

  return (
    <div className='flex items-center  pt-3 justify-between'>
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[90px] rounded-full md:w-[115px] object-cover' />

        <div className='hidden md:flex gap-8'>
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
          {/* Add a button that triggers opening the Quiz Modal */}
          <button onClick={openQuizModal}>
            <HeaderItem name="QUIZ" Icon={HiStar} />
          </button>
        </div>

        <div className='flex md:hidden gap-5 justify-center text-red-600'>
          {menu.map((item, index) => index < 3 && (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}

          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={' '} Icon={HiDotsVertical} />
            {toggle ? (
              <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-800 p-3 px-5 py-4'>
                {menu.map((item, index) => index > 2 && (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <img src={avatar} className='w-[50px] rounded-full' />
      </div>

      {/* Render the Quiz Modal here */}
      {isQuizModalOpen && <QuizModal closeModal={closeQuizModal} />}
    </div>
  );
}

export default Header;
