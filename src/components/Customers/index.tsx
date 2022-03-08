import React from "react";


import {
    ContainerStories,
    ContainerAchievements,
    DivTitleAchievements,
    DivAchievementsReached,
    DivAchievement,
    DivTitleStories,
    DivStories,
    DivStories1,
    DivStories2,
    DivQuoteMark,
    DivQuoteMark2,
    DivQuoteMark3,
    DivImageStories,
    DivAllStories,
    DivPeopleStorie,
    SectionStories,
  } from "./styles";
  

import QuoteMark2 from "../../assets/Quotemark2.svg";

import ClientLogo5 from "../../assets/Clientlogo5.svg";
import ClientLogo6 from "../../assets/Clientlogo6.svg";
import ClientLogo7 from "../../assets/Clientlogo7.svg";

import Feature1 from "../../assets/feature1.svg";
import Feature3 from "../../assets/feature3.svg";
import Feature4 from "../../assets/feature4.svg";
import Feature5 from "../../assets/feature5.svg";

export default function Customers() {
  return (
    <>
      <ContainerStories>
        <div>
          <DivTitleStories>
            <h1>Real Stories from Real Customers</h1>
            <p>Get inspired by these stories.</p>
          </DivTitleStories>

          <DivStories>
            <DivAllStories>
              <DivImageStories>
                <img src={ClientLogo5} alt="www.google.com" />
              </DivImageStories>
              <DivQuoteMark3>
                <img src={QuoteMark2} alt="www.google.com" />
                <p>
                  To quickly start my startup landing page design, I was looking
                  for a landing page UI Kit. Landify is one of the best landing
                  page UI kit I have come across. It’s so flexible, well
                  organised and easily editable.
                </p>
              </DivQuoteMark3>
              <DivPeopleStorie>
                <h1>Floyd Miles</h1>
                <p>Vice President, GoPro</p>
              </DivPeopleStorie>
            </DivAllStories>
          </DivStories>
        </div>

        <SectionStories>
          <DivStories1>
            <DivAllStories>
              <DivImageStories>
                <img src={ClientLogo6} alt="www.google.com" />
              </DivImageStories>
              <DivQuoteMark>
                <img src={QuoteMark2} alt="www.google.com" />
                <p>
                  I used landify and created a landing page for my startup
                  within a week. The Landify UI Kit is simple and highly
                  intuitive, so anyone can use it.
                </p>
              </DivQuoteMark>
              <DivPeopleStorie>
                <h1>Jane Cooper</h1>
                <p>CEO, Airbnb</p>
              </DivPeopleStorie>
            </DivAllStories>
          </DivStories1>

          <DivStories2>
            <DivAllStories>
              <DivImageStories>
                <img src={ClientLogo7} alt="www.google.com" />
              </DivImageStories>
              <DivQuoteMark2>
                <img src={QuoteMark2} alt="www.google.com" />
                <p>Landify saved our time in designing my company page.</p>
              </DivQuoteMark2>
              <DivPeopleStorie>
                <h1>Kristin Watson</h1>
                <p>Co-Founder, Strapi</p>
              </DivPeopleStorie>
            </DivAllStories>
          </DivStories2>
        </SectionStories>
      </ContainerStories>

      <ContainerAchievements>
        <DivTitleAchievements>
          <h1>Our 18 years of achievements</h1>
          <p>With our super powers we have reached this</p>
        </DivTitleAchievements>
        <DivAchievementsReached>
          <div>
            <DivAchievement>
              <div>
                <img src={Feature1} alt="www.google.com" />
              </div>
              <div>
                <h1>10,000+</h1>
                <p>Downloads per day</p>
              </div>
            </DivAchievement>
            <DivAchievement>
              <div>
                <img src={Feature5} alt="www.google.com" />
              </div>
              <div>
                <h1>500+</h1>
                <p>Clients</p>
              </div>
            </DivAchievement>
          </div>
          <div>
            <DivAchievement>
              <div>
                <img src={Feature4} alt="www.google.com" />
              </div>
              <div>
                <h1>2 Million</h1>
                <p>Users</p>
              </div>
            </DivAchievement>

            <DivAchievement>
              <div>
                <img src={Feature3} alt="www.google.com" />
              </div>
              <div>
                <h1>140</h1>
                <p>Countries</p>
              </div>
            </DivAchievement>
          </div>
        </DivAchievementsReached>
      </ContainerAchievements>
    </>
  );
}
