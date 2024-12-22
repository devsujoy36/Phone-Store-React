import { useLoaderData } from "react-router-dom"
import Phone from "./Phone"

const Phones = () => {
    const phones = useLoaderData()
  
    // console.log(phones);
  
  return (
    <div>
      <h1>Phones</h1>
        <div className="grid grid-cols-4 gap-4">
          {
            phones.map((phone,idx)=><Phone key={idx} phone={phone}/>)
          }
        </div>
    </div>
  )
}

export default Phones