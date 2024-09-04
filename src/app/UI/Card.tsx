import Calunder from "../svg/Calunder";
import Location from "../svg/Location";
import Review from "../svg/Rivew";
import Unit from "../svg/Unit";
import Img from "./Img";
import Style from "./card.module.css";

interface Details {
    location: string,
    code: Number,
    profileName: string,
    date: string,
    type: string
    time: string

}

const Card: React.FC<Details> = ({ location, code, profileName, date, type, time }) => {
    return (<>
        <div className="">
            <div className="flex justify-between bg-white card-visit">
                <div className="p-3">
                    <h3 className="leading-none text-lg sm:text-xl font-bold mb-8">
                        2 bed end terrace house for sale
                    </h3>
                    <ul className="p-0 mb-8 flex justify-between unit-items">
                        <li className="text-gray-700 text-sm mb-2 flex items-center">
                            <Location />
                            {location}
                        </li>
                        <li className="text-black text-sm flex items-center">
                            <Unit />
                            <span className="text-gray-700 text-sm"> Unit code: </span>
                            #{code}
                        </li>
                    </ul>
                    <p className="text-lg mb-0 flex items-center">
                        <span>
                            <Img />
                        </span>
                        {profileName}
                    </p>
                </div>
                <div className={`${Style.calendar_card} flex flex-col items-center justify-center`}>
                    {type === "calunder" ? (
                        <>
                            <span className="pb-2">
                                <Calunder />
                            </span>
                            <p>
                                {date}

                            </p>
                            <p className="mb-0">
                                {time}

                            </p>
                        </>

                    ) :
                        (
                            <>

                                <Review />
                                <p className="font-normal text-base	 dander-40 mb-0">In review</p>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    </>)
}
export default Card;