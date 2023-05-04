import React, { useState, useEffect } from 'react'
import Hero from '../../components/hero/Hero'
import SectionWrapper from '../../components/section-wrapper/SectionWrapper'
import About from '../../components/about/About'
import axios from "axios";

export const Home = () => {
  const [descriptionShort, setDescriptionShort] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/about`);
      console.log(response);
      setDescriptionShort(response.data.descriptionShort);
    }
    getData();
  }, []);
  return (
    <>
      <Hero />
      <SectionWrapper>
        <About 
          withImg={true}
          content={descriptionShort}
        />
      </SectionWrapper>
    </>
  )
}
