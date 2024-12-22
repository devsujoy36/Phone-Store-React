import { useLoaderData } from "react-router-dom"
import Phone from "./Phone"

const Phones = () => {
  const phonesData = useLoaderData()
  const phones = phonesData.data;

  return (
    <div className="max-w-screen-2xl md:mx-auto mx-10 py-5">
      <h1 className="text-4xl font-semibold text-center pb-5">Phones</h1>
      <div className="grid md:grid-cols-7 gap-4">
        {
          phones.map((phone, idx) => <Phone key={idx} phone={phone} />)
        }
      </div>
    </div>
  )
}

export default Phones