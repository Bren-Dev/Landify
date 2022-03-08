import React from "react";
import {
  ContainerIntegrations,
  DivTitleIntegration,
  DivImageIntegration,
  ContainerProjectsMobile,
  DivTitleProjects,
  DivStoreBadge,
  DivImageProjects,
  Footer,
  DivFooterLogo,
  DivGetApp
} from "./styles";

import Header from "../components/Header";
import Features from "../components/Features";
import Customers from "../components/Customers";

import IntegrationLogos from "../assets/IntegrationLogos.svg";
import StoreBadge from "../assets/Storebadge.svg";
import StoreBadge2 from "../assets/Storebadge2.svg";
import MobilePhones from "../assets/MobilePhones.svg";
import Logo from "../assets/Logo1.svg";

function App() {
  return (
    <>
      <Header />
      <Features />
      <Customers />

      <ContainerIntegrations>
        <DivTitleIntegration>
          <h1>Easy integrations with 170+ tools</h1>
          <p>
            Connect Landify with your favourite tools that you use daily and
            keep things on track.
          </p>
        </DivTitleIntegration>
        <DivImageIntegration>
          <img src={IntegrationLogos} alt="www.google.com" />
        </DivImageIntegration>
      </ContainerIntegrations>

      <ContainerProjectsMobile>
        <DivTitleProjects>
          <h1>Manage all projects from your mobile</h1>
          <p>
            Download the app to manage your projects, keep track of the progress
            and complete tasks without procastinating. Stay on track and
            complete on time!
          </p>
          <DivStoreBadge>
            <p>Get the App</p>
            <img src={StoreBadge2} alt="www.google.com" />
            <img src={StoreBadge} alt="www.google.com" />
          </DivStoreBadge>
        </DivTitleProjects>

        <DivImageProjects>
          <img src={MobilePhones} alt="www.google.com" />
        </DivImageProjects>
      </ContainerProjectsMobile>

      <Footer>
        <DivFooterLogo>
          <img src={Logo} alt="www.google.com" />

          <ul>
            <li>Download Now</li>
            <li>License</li>
          </ul>

          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>News</li>
            <li>Help</li>
            <li>Contact</li>
          </ul>

          <p>© 2021 Landify UI Kit. All rights reserved</p>
        </DivFooterLogo>

        <DivGetApp>
          <p>Get the App</p>

          <img src={StoreBadge} alt="www.google.com" />
          <img src={StoreBadge2} alt="www.google.com" />

        </DivGetApp>
      </Footer>
    </>
  );
}

export default App;
