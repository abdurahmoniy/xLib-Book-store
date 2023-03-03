import react from "react";
import { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  console.log(book)
  return (
    <>
      <div className="m-auto w-full bg-myteal md:mx-20 my-10">
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      </div>
      <div className="grid md:grid-cols-4 xl:grid-cols-5 grid-cols-2 text-center justify-between m-auto w-full my-10">
        {
          book.map((item) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if (thumbnail != undefined && amount != undefined) {
              return (
                <>
                  <div className="w-[150px] mx-auto ss:w-[300px] border-myteal hover:scale-[1.05] duration-300 border my-2 h-[250px] ss:h-auto ss:min-h-[300px] rounded-xl bg-myteal" onClick={() => { setShow(true); setItem(item) }}>
                    <div className="h-[70%] bg-mytext1 rounded-t-xl p-1">
                      <img src={thumbnail} alt="" className="m-auto h-full w-[100%] p-1 rounded-xl" />
                    </div>
                    <div className="bg-mytext1 h-[30%] rounded-b-xl">
                      <h3 className="text-mylight ss:font-bold p-1 ss:p-4 text-[12px] ss:text-[20px]">{item.volumeInfo.title}</h3>
                    </div>
                  </div>

                </>
              )
            }

          })
        }

      </div>
    </>
  )
}
export default Card;