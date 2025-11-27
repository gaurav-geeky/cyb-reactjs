import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = () => {
  const [mydata, setmydata] = useState("");

  useEffect(() => {
    (
      async () => {
      let api = `${import.meta.env.VITE_BACK}/dashboard`;
      const response = await axios.gte(api);
      console.log(response.data.msg);
    }
    )
  }, [])

  return (
    <>
      <section>

        hello iam dahbaord in session lgoin

      </section>
    </>
  )
}

export default Dashboard; 
