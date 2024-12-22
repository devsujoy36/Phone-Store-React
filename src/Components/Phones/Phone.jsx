/* eslint-disable react/prop-types */
const Phone = ({ phone }) => {
  console.log(phone);
  const { brand, phone_name, slug, image } = phone;

  return (
    <div className="border rounded-md">
      <figure>
        <img src={image} alt={image} />
      </figure>
      <h1>{brand}</h1>
      <h1>{phone_name}</h1>
      <h1>{slug}</h1>
      <button>Show Info</button>
    </div>
  )
}

export default Phone