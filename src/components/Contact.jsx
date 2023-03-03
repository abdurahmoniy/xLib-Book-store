import React from 'react'
import { i } from './consts'
import Header from './Header'
import { styles } from './style'




export default function Contact() {
  return (
    <div>
      <div className="w-full overflow-hidden font-myfont bg-myblack con_bg">
        <Header />
        <div className={`${styles.padX}`}>
          <div className={`${styles.container}`}>
            <div id='contact' className={`bgimage flex md:flex-row flex-col min-h-[92.5vh] welcome_text`}>
              <div className="text-center mx-auto font-bold text-mylight my-10">
                <div className="w-full justify-between">

                  <div className="form rounded-2xl py-5 px-5 min-h-[400px] ss:w-[600px] w-[400px] bg_grd">
                    <h1 className='text-[35px]'>Contact</h1>
                    <input type="text" name="name" class="text w-[95%]" placeholder="Your name" />
                    <br />
                    <input type="email" name="email" class="text w-[95%]" placeholder="Your email" />
                    <br />
                    <textarea type="text" name="message" placeholder="Write something" class="text w-[95%]" />
                    <br />
                    <input type="submit" class="submit" value="Submit" className='hover:bg-mybg1 duration-300 hover:text-myteal cursor-pointer py-2 px-4 font-myfont font-medium 
                          text-[16px] bg-mytext1 text-mylight rounded-[8px] outline-none m-2' />
                  </div>
                  <div className='my-10'>
                    <div className='text-[30px]'>Socials</div>
                    <div className="text-mylight fa-2x w-[250px] mx-auto ">
                      {
                        i.map((clas, id) => (
                          <i key={id} className={`${clas.class} px-4`}></i>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
