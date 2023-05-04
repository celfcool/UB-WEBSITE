import React, { useState, useEffect } from 'react'
import SectionWrapper from '../../components/section-wrapper/SectionWrapper'
import About from '../../components/about/About'
import axios from "axios";

export const AboutPage = () => {
  const [descriptionFull, setDescriptionFull] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/about`);
      console.log(response);
      setDescriptionFull(response.data.descriptionFull);
    }
    getData();
  }, []);
  return (
    <SectionWrapper>
        <About 
          content={descriptionFull}
        />
    </SectionWrapper>
  )
}
