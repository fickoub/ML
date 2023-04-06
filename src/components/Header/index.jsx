import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-center justify-center mt-2.5 mx-auto w-[93%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <Img
              src="images/img_tlcharger1.png"
              className="h-[67px] md:h-auto object-cover w-[67px]"
              alt="tlchargerOne"
            />
            <Text
              className="font-inter md:ml-[0] ml-[23px] not-italic text-left text-white_A700 w-auto"
              as="h1"
              variant="h1"
            >
              MBOT
            </Text>
            <Text
              className="font-bold font-inter md:ml-[0] ml-[68px] text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              Accueil
            </Text>
            <Text
              className="common-pointer font-bold font-inter md:ml-[0] ml-[77px] text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
              onClick={() => navigate("/historiqueadmin")}
            >
              Historique
            </Text>
            <Text
              className="font-bold font-inter md:ml-[0] ml-[54px] text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              Conversation
            </Text>
            <Text
              className="bg-amber_900 flex font-bold font-inter h-[30px] items-center justify-center md:ml-[0] ml-[11px] md:mt-0 my-[18px] rounded-[50%] text-center text-white_A700 w-[30px]"
              variant="body1"
            >
              1
            </Text>
            <Text
              className="font-bold font-inter md:ml-[0] ml-[290px] text-left text-white_A700 w-auto"
              as="h6"
              variant="h6"
            >
              Bonjour, Becaye
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="h-6 ml-2 md:ml-[0] w-auto"
              alt="arrowdown"
            />
          </div>
          <div className="bg-amber_900 h-2.5 md:ml-[0] ml-[278px] mr-[967px] w-[7%]"></div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
