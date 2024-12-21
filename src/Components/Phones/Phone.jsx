import { useLoaderData } from "react-router-dom"

const Phone = () => {
    const phone = useLoaderData()
    console.log(phone);
  return (
    <div>Phone</div>
  )
}

export default Phone