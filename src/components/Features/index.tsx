import React from "react";

import {
    ContainerCloud,
    ContainerTailor,
    DivTitle,
    SectionTypeFeatures,
    DivFeature,
  } from "./styles";

import ClientLogo from "../../assets/Clientlogo.svg";
import ClientLogo2 from "../../assets/Clientlogo2.svg";
import ClientLogo3 from "../../assets/Clientlogo3.svg";
import ClientLogo4 from "../../assets/Clientlogo4.svg";
import ClientLogo5 from "../../assets/Clientlogo5.svg";
import ClientLogo6 from "../../assets/Clientlogo6.svg";

import Feature1 from "../../assets/feature1.svg";
import Feature2 from "../../assets/feature2.svg";
import Feature3 from "../../assets/feature3.svg";
import Feature4 from "../../assets/feature4.svg";
import Feature5 from "../../assets/feature5.svg";
import Feature6 from "../../assets/feature6.svg";

export default function Features() {
  return (
    <>
      {" "}
      <ContainerCloud>
        <img src={ClientLogo} alt="www.google.com" />
        <img src={ClientLogo2} alt="www.google.com" />
        <img src={ClientLogo3} alt="www.google.com" />
        <img src={ClientLogo4} alt="www.google.com" />
        <img src={ClientLogo5} alt="www.google.com" />
        <img src={ClientLogo6} alt="www.google.com" />
      </ContainerCloud>
      <ContainerTailor>
        <DivTitle>
          <h1>Tailor-made features</h1>
          <p>
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>
        </DivTitle>
        <SectionTypeFeatures>
          <DivFeature>
            <img src={Feature1} alt="www.google.com" />
            <h1>Robust workflow</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>

          <DivFeature>
            <img src={Feature2} alt="www.google.com" />
            <h1>Flexibility</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>

          <DivFeature>
            <img src={Feature3} alt="www.google.com" />
            <h1>User friendly</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>

          <DivFeature>
            <img src={Feature4} alt="www.google.com" />
            <h1>Multiple layouts</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>

          <DivFeature>
            <img src={Feature5} alt="www.google.com" />
            <h1>Better components</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>

          <DivFeature>
            <img src={Feature6} alt="www.google.com" />
            <h1>Well organised</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              nibh tristique ipsum.
            </p>
          </DivFeature>
        </SectionTypeFeatures>
      </ContainerTailor>
    </>
  );
}
