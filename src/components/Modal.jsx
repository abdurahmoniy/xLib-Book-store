const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay z-10">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
             {/* <figure class="md:flex bg-slate-100 rounded-xl h-full md:max-h-[800px] p-8 md:p-0 bg-transparent">
                <img class="mx-auto w-[40%]" src={thumbnail} alt=""/>
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4 md:w-[60%]">
                    <figcaption class="font-medium">
                        <div class="text-[20px] font-bold">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                        </div>
                        <div class="">
                            <h4>{item.volumeInfo.publisher} <br /><span>{item.volumeInfo.publishedDate}</span></h4><br />
                        </div>
                    </figcaption>
                    <blockquote>
                        <p class="text-lg font-medium pb-4">
                            <h4 className="description">{item.volumeInfo.description}</h4>
                        </p>
                    </blockquote>
                    <a href={item.volumeInfo.previewLink} className='rounded-md py-3 px-8 hover:bg-mybg1 hover:text-myblack duration-300 bg-myblack text-mylight' target='_blank'><button>More</button></a>
                </div>
            </figure> */}
        </>
    )
}
export default Modal;