import React, { useEffect, useState } from 'react'
const Homepage = () => {
  const [data, setData] = useState([]);
  const url = "https://restcountries.com/v2/all?fields=name,region,flag"
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    } catch (error) {
    }
  };
  console.log({ data })

  return (
    <div>
      <h1>Home Page</h1>
      {data.map(item => (
        <div className='api-main' key={item.name}>
          <td className='name'>{item.name}</td>
          <td className='name'>{item.region}</td>
          <td className='image'><img style={{ width: "100px" }} src={item.flag} alt='flag' /></td>
        </div>
      ))}
    </div>
  )
}

export default Homepage
