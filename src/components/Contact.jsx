import React from 'react'
import { i } from './consts'
import Header from './Header'
import { styles } from './style'




export default function Contact() {
  return (
    <div>
      <div className="w-full overflow-hidden font-myfont bg-myblack con_bg">
        <Header />
        <div className={`${styles.padX} ${styles.container}`}>
          <div id='contact' className={`bgimage flex md:flex-row flex-col min-h-[91.3vh] welcome_text`}>
            <div className="text-center mx-auto font-bold text-mylight my-10">
              <div className="rounded-2xl min-h-[350px] bg-myteal minput">
                <div className='text-[35px] text-myteal bg-mylight ss:w-[600px] w-[400px] rounded-t-2xl'>Contact</div>
                <div className="p-4">
                  <input type="text" name="name" className="text w-[95%]" placeholder="Your name" />
                  <br />
                  <input type="email" name="email" className="text w-[95%]" placeholder="Your email" />
                  <br />
                  <textarea type="text" name="message" placeholder="Write something" className="text w-[95%]" />
                  <br />
                  <button type="submit" value="Submit" className='submit hover:bg-mytext1 duration-300
                          hover:text-mybg1 cursor-pointer py-2 px-4 font-myfont font-medium 
                            text-[16px] bg-mybg1 text-myteal rounded-[8px] outline-none m-2'>Submit</button>
                </div>
              </div>
              <div className='my-10 bg-myteal rounded-2xl minput min-h-[250px]'>
                <div className='text-[30px] bg-mylight text-myteal rounded-t-2xl'>Socials</div>
                <div className=" fa-2x w-[250px] mx-auto my-8">
                  {
                    i.map((clas, id) => (
                      <a key={id} href={clas.href} target='_blank' className='m-3'>
                        <i className={`${clas.class} my-3 bg-mylight text-myteal rounded-full`}></i>
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
