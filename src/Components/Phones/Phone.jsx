import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Phone = ({ phone }) => {
  // console.log(phone);
  const { brand, phone_name, slug, image } = phone;

  const navigate = useNavigate()
  const showDetailsHandler = () => {
    navigate(`/phonedetails/${slug}`)
  }
  return (
    <div className="border rounded-xl shadow-lg p-3">

      <figure className="flex overflow-hidden justify-center items-center mb-2">
        <img className="active:scale-95 transition-all" src={image} alt={image} />
      </figure>

      <div className="flex flex-col gap-2 text-xs">
        <h1>{brand}</h1>
        <h1 className="font-bold">{phone_name}</h1>
        <h1>{slug}</h1>
        <div className="text-right mt-2">
          <button onClick={showDetailsHandler} className="bg-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-400 active:scale-95 transition-all text-sm text-white font-semibold">Show Info</button>
        </div>
      </div>

    </div>
  )
}

export default Phone