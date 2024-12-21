import { useLoaderData } from "react-router-dom"
import Phone from "./Phone"

const Phones = () => {
    const data = useLoaderData()
    console.log(data);

  return (
    <div>Phones

        <Phone/>
    </div>
  )
}

export default Phones