import React from 'react'
import Header from './Header';
import HomeComp from './HomeComp';
import { styles } from './style'

export default function Home() {
  return (
    <div>
      <div className="w-full overflow-hidden font-myfont bg_book bg-left md:bg-bottom">
        <Header />
        <div className={`${styles.padX} ${styles.container}`}>
          <div className={`flex md:flex-row flex-col min-h-[91.3vh] z-0`}>
            <div className={`flex-1 flex-col py-0 flex justify-center items-start welcome_text`}>
              <div className='w-full'>
                <h1 className={`${styles.heading}`}>
                  <span className='text-myteal'>xLib</span> — <br /> Book Library
                </h1>
              </div>
              <p className={`${styles.paragraph} mt-5 max-w-[500px] text-[20px]`}>
                <span className='text-myteal font-bold text-[25px]'>xLib</span> helps you to
                <span className='text-myteal font-bold text-[25px]'> read</span> and <br className='ss:hidden' />
                <span className='text-myteal font-bold text-[25px]'>search</span> books online.
              </p>
              <a href="/books" className="'hover:bg-mytext1 duration-300
                          hover:text-myteal hover:scale-90 hover:bg-mybg1 cursor-pointer py-2 px-4 font-myfont font-medium 
                            text-[16px] bg-myteal text-mylight rounded-[8px] outline-none my-4">Search Books</a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen border">
        <HomeComp/>
      </div>
    </div>
  )
}
