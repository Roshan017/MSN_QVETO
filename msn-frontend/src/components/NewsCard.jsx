function NewsCard(props) {
  return (
    <>
      <div className="card rounded-xl hover:shadow-2xl border-2 cursor-pointer transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-105 font-sans  w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col h-full min-h-[420px]">
        <div className="card-img  h-48 rounded-t-xl overflow-hidden">
          <img
            src={props.img}
            alt={props.heading}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="category-tag font-bold text-base sm:text-lg ml-1 text-shadow-lg">
          {props.category}
        </div>
        <div className="card-header  p-2 mt-1  flex justify-center items-center font-bold text-lg sm:text-xl hover:underline hover:text-shadow-lg">
          {props.heading}
        </div>

        <div className="discription mt-1 p-2 text-sm sm:text-base">
          {props.discription}
        </div>

        <div className="btn-author-date mt-5  text-shadow-lg flex flex-col justify-between flex-1">
          <div className="author-date  flex justify-between items-center h-10 p-1 ">
            <div className="author">{props.author}</div>
            <div className="date">{props.date}</div>
          </div>
          <div className="btn flex items-start justify-center hover:shadow-2xl mt-2">
            <button className="border-2 rounded font-bold cursor-pointer text-center p-1 hover:bg-blue-500 bg-blue-300 text-white">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
