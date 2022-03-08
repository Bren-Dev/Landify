import React from "react";

import {
    DivHeader,
    ContainerHeader,
    DivLogo,
    DivApp,
    SectionManage,
    DivWatchVideo,
    DivImagePhone,
    DivButtonWatch,
    ButtonGet,
    ButtonWatch,

  } from "./styles";


import Logo from "../../assets/Logo.svg";
import StoreBadge from "../../assets/Storebadge.svg";
import StoreBadge2 from "../../assets/Storebadge2.svg";
import Phone from "../../assets/Mobile.svg";
import IconButtonWatch from "../../assets/Icon.svg";

export default function Header() {
  return (
    <>
      <ContainerHeader>
        <DivHeader>
          <DivLogo>
            <img src={Logo} alt="www.google.com" />
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Help</li>
            </ul>
          </DivLogo>
          <DivApp>
            <img src={StoreBadge2} alt="www.google.com" />
            <img src={StoreBadge} alt="www.google.com" />
          </DivApp>
        </DivHeader>
        <SectionManage>
          <DivWatchVideo>
            <h1>The easiest way to manage projects</h1>
            <p>
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
            </p>
            <DivButtonWatch>
              <ButtonGet>
                <button>Get Started</button>
              </ButtonGet>
              <ButtonWatch>
                <img src={IconButtonWatch} alt="www.google.com" />
                <button>Watch Video</button>
              </ButtonWatch>
            </DivButtonWatch>
          </DivWatchVideo>

          <DivImagePhone>
            <img src={Phone} alt="www.google.com" />
          </DivImagePhone>
        </SectionManage>
      </ContainerHeader>
    </>
  );
}
