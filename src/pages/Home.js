import React from "react";
import styled from 'styled-components';
import profileImg from "../assets/images/profile.jpg";

export default () => {
  return (
    <div className='h-full
                    grid grid-rows-2 items-center'>
      <ProfileSection />
      <DescriptionSection />
      {/* todo: */}
      {/* <ChatBox /> */}
    </div>
  );

  function ProfileSection() {
    const AvatarStyled = styled.a`
      background: no-repeat center/100% url(${profileImg});
      height: 150px;
      width: 150px;
      border-radius:  50%;
      border: solid 5px #d9ebff;
      
      :hover {
        border-color: #91bfff;
      }
    `;

    return (
      <div className='h-full bg-[#f0f8ff] p-3
                      flex  flex-col items-center
                    text-[#f0f8ff] italic'>
        {/* <AvatarStyled href="/home" /> {/* normal run version */}
        <AvatarStyled href="/portfolio/#/home"/>{/*  GitHub Pages version */}
        <h3 className="mt-3 text-[#ffa07a]">Max Damaskanau</h3>
        <h4 className="mt-3 text-gray-600">seeking for new ways to make the world a better place</h4>
        <h4 className="mt-3 text-gray-600">to meet new people and make new friends</h4>
        <h4 className="mt-3 text-gray-600">to learn, to solve and to share</h4>
      </div>
    );
  }

  function DescriptionSection() {
    function MyCard() {
      return (
        <a href="#"> {/*  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 */}
          <div className="h-76 mr-16 p-2 max-w-lg bg-slate-300
                          rounded-lg border border-gray-200 shadow-md
                          flex flex-col justify-around
                        hover:bg-slate-200">
            <Title />
            {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
            <Description />
          </div>
        </a>
      );

      function Title() {
        return (
          <h5 className="text-2xl font-bold tracking-tight">
            Sammary:
          </h5>
        );
      }

      function Description() {
        return (
          <div className="p-2
                          flex flex-col
                          ">
            <p>5 years in commercial development with complex knowledge in the backend domain</p>
            <p>Responsible for providing optimal system design</p>
            <p>Responsible for keeping code tested & reusable</p>
            <p>Familiar with major cloud providers. Have set up dozens of server-oriented machines</p>
            <p>Familiar with microservices-based architecture. Implemented SSO flow</p>
            <p>Practiced in setting up CI/CD, supported a Kubernetes cluster</p>
            <p>Passionate about algorithms & data structures.</p>
          </div>
        );
      }
    }

    const ResourceStyled = styled.a`
      color: #ee9797;
      font-weight: bold;
      padding: 0 0 10px 10px;
  
      :hover {
        color: cornflowerblue;
      }
    `;

    const Socials = () =>
      <div className='w-1/5 p-2 bg-slate-300
                      my-auto rounded-xl
                      flex flex-col items-center'>
        <h3 className="text-[#76a9f0]">Some links:</h3>
        <ResourceStyled href="https://github.com/maxdoma">github</ResourceStyled>
        <ResourceStyled href="https://leetcode.com/maxdoma">leetcode</ResourceStyled>
        <ResourceStyled href="https://www.linkedin.com/in/maxdoma">linkedin</ResourceStyled>
        <ResourceStyled href="https://www.youtube.com/channel/UCOhIKqfmUICguRVwzgdwO1Q">youtube</ResourceStyled>
      </div>

    return (
      <div className='h-full
                     border-t border-zinc-200
                     flex items-center justify-center italic
                     '>
        <MyCard />
        <Socials />
      </div>
    );
  }

  function ChatBox() {
    return (
      <div className="w-3/5 h-32 bg-amber-800
                      rounded-lg">chatbox</div>
    );
  }
};


