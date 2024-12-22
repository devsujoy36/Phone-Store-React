/* eslint-disable no-undef */
import { useLoaderData, useNavigate } from "react-router-dom"

const PhoneDetails = () => {
    const phoneInfo = useLoaderData();
    const phone = phoneInfo.data;
    console.log(phone);
    const { brand, image, mainFeatures, name, releaseDate } = phone;
    const { chipSet, displaySize, memory, sensors, storage } = mainFeatures;

    const navigate = useNavigate();
    const goBackHandler = () => {
        navigate(-1)
    }
    return (
        <div className="grid grid-cols-2 gap-10  m-10 max-w-screen-2xl mx-auto">
            <div className="flex justify-end rounded-lg items-center overflow-hidden">
                <img className="w-56 lg:w-96 hover:scale-110 transition-all duration-150" src={image} alt="" />
            </div>
            <div className="text-xl mt-5">
                <div>
                    <h1><span className="font-bold ">Name: </span>{name}</h1>
                    <h1><span className="font-bold ">Brand: </span>{brand}</h1>
                    <h1><span className="font-bold ">CPU: </span>{chipSet}</h1>
                    <h1><span className="font-bold ">RAM: </span>{memory}</h1>
                    <h1><span className="font-bold ">ROM: </span>{storage}</h1>
                    <h1><span className="font-bold ">Display Size: </span>{displaySize}</h1>
                    <h1 className="font-bold">Sensors:</h1>
                    <div className="ml-10">
                        {sensors.map((sensor, idx) => <h1 key={idx}><span className="font-bold">--</span>  {sensor}</h1>)}
                    </div>
                    <h1><span className="font-bold">Release Date: </span>{releaseDate}</h1>
                <div className="my-5">
                    <button onClick={goBackHandler} className="bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-500 active:scale-95 text-white font-semibold transition-all ">Back</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneDetails