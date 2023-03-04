import Header from './Header'
import { styles } from './style'
import { useState } from "react";
import Card from "./Card";
import axios from "axios";
import logo from './assests/logo.png'
import { catg } from './consts';


const Books = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='
       + search + '&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU' + '&maxResults=40')
        .then(res => setData(res.data.items))
        .catch(err => console.log(err))
    }
  }
  return (
    <>
      <div>
        <Header />
        <div className="w-full overflow-hidden font-myfont bg-myblack z-0">
          <div id='books' className={`bgimage min-h-[91vh] main_bar`}>
            <div className={`${styles.padX}`}>
              <div className={`${styles.container} welcome_text`}>
                <div className="mx-auto w-[300px] pt-24">
                  <img src={logo} alt="" className='mlogo' />
                </div>
                <div className="minput w-[280px] xs:w-[350px] md:w-[500px] search bg-myteal
                 text-mylight mx-auto rounded-full my-10">
                  <input type="text" placeholder="Enter Your Book Name"
                    value={search} onChange={e => setSearch(e.target.value)}
                    onKeyPress={searchBook}
                    className=' w-[83%] md:mx-[23px] mx-[10px] py-[10px]' />
                  <button><i className="fas fa-search"></i></button>
                </div>
                <div className="mx-auto md:w-[500px] w-[350px] minput rounded-xl bg-myteal">
                  <div className="text-center text-[25px] text-myteal bg-mylight rounded-t-xl py-2">Categories</div>
                  <div className="grid md:grid-cols-4 grid-cols-3 justify-between py-8 px-6">
                    {catg.map ((cat, id)=>(
                      <div className="">
                        <div className={``} key={id}>
                          <div className="bg-mylight rounded-full w-[50px] mx-auto">
                            <img src={cat.img} alt="" className='rounded-full' />
                          </div>
                        </div>
                        <div className="text-[17px] my-2 text-mylight text-center">{cat.title}</div><br />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className={`${styles.padX}`}>
            <div className={`${styles.container}`}>
              <Card book={bookData} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Books;
