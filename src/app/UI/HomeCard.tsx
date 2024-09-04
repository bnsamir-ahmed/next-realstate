import Style from "./button.module.css"
interface Home {
    upcoming:string,
    past:string,
    home:string,
    description:string,
 
    // type:"upcoming" ,
    //  pastType:"past",

}


const HomeCard:React.FC <Home> = ({upcoming , past , home ,description  }) => {
    return (
      <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
        <div className="flex space-x-2 mb-4">
          {/* {type === "upcoming" && (<button className= {`${Style.btn_prim} py-2 px-4 rounded-lg`}>{upcoming}</button>)  } */}
          {/* {pastType === "past" && (<button className= {`${Style.btn_danger} py-2 px-4 rounded-lg`}>{past}</button>)  } */}
          <button className= {`${Style.btn_prim} py-2 px-4 rounded-lg`}>{upcoming}</button>
          <button className= {`${Style.btn_danger} py-2 px-4 rounded-lg`}>{past}</button>

        </div>
        <div className="bg-white flex flex-col p-4 my-3 rounded-lg shadow">
          <h3 className="text-3xl sm:text-xl font-bold mb-3"> {home}</h3>
          <p className="text-gray-700 text-justify mb-4">
            {description}
           {/*  */}
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg self-start">Search</button>
        </div>
      </div>
    );
  };
  
  export default HomeCard;