import React from 'react'
import Header from './Header';
import { styles } from './style'

export default function Home() {
  return (
    <div>
      <div className="w-full overflow-hidden font-myfont bg_book bg-left md:bg-bottom">
            <Header />
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <div className={`bgimage flex md:flex-row flex-col min-h-[93vh] z-0`}>
              <div className={`flex-1 flex-col py-0 flex justify-center items-start welcome_text`}>
                <div className='w-full'>
                  <h1 className={`${styles.heading}`}>
                     <span className='text-myteal'>xLib</span> — <br /> Book Library
                  </h1>
                </div>
                <p className={`${styles.paragraph} mt-5 max-w-[500px] text-[20px]`}>
                  <span className='text-myteal font-bold text-[25px]'>xLib</span> helps you to <span className='text-myteal font-bold text-[25px]'>search</span> and <br className='ss:hidden' /> <span className='text-myteal font-bold text-[25px]'>read</span> books online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
