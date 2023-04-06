import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const PgeconnexionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-end mx-auto pt-1.5 px-1.5 w-full">
        <Text
          className="common-pointer md:mt-0 mt-[1000px] text-black_900 text-left w-auto"
          variant="body3"
          onClick={() => navigate("/accueiladminpopup")}
        >
          Copyright
        </Text>
        <div className="bg-black_900 flex items-center justify-start mb-[145px] md:ml-[0] ml-[258px] md:mt-0 mt-[122px] p-14 md:px-5 w-[51%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[111px] items-center justify-start mb-[82px] w-[98%] md:w-full">
            <Img
              src="images/img_tlcharger1.png"
              className="h-[167px] md:h-auto object-cover w-[167px]"
              alt="tlchargerOne"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[71px] items-start justify-start w-[98%] md:w-full">
                <Text
                  className="text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  Identifiant:
                </Text>
                <Text
                  className="common-pointer bg-bluegray_100_e0 font-bold h-[41px] justify-center sm:mt-0 mt-2 pb-[3px] pt-[7px] px-[5px] text-black_900 text-left w-[341px]"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/accueiluser")}
                >
                  becaye.fickou@orange.com
                </Text>
              </div>
              <div className="bg-amber_900 h-2.5 w-[29%]"></div>
              <div className="flex sm:flex-col flex-row gap-[23px] items-start justify-start mt-[41px] w-[98%] md:w-full">
                <Text
                  className="common-pointer text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                  onClick={() => navigate("/accueiladminpopup")}
                >
                  Mot de passe:
                </Text>
                <Text
                  className="bg-bluegray_100_e0 font-bold h-[41px] sm:mt-0 mt-1 pb-[7px] pl-[5px] sm:pr-5 pr-[35px] pt-[3px] text-black_900 text-left w-[341px]"
                  as="h6"
                  variant="h6"
                >
                  **********
                </Text>
              </div>
              <div className="bg-amber_900 h-2.5 w-[37%]"></div>
              <Button
                className="common-pointer bg-amber_900 cursor-pointer font-bold leading-[normal] min-w-[186px] md:ml-[0] ml-[412px] mt-[84px] py-1 rounded-[19px] text-2xl md:text-[22px] text-center text-white_A700 sm:text-xl w-auto"
                onClick={() => navigate("/")}
              >
                Se connecter
              </Button>
            </div>
          </div>
        </div>
        <Text
          className="md:ml-[0] ml-[295px] md:mt-0 mt-[998px] text-black_900 text-left w-auto"
          variant="body3"
        >
          FICKOU
        </Text>
      </div>
    </>
  );
};

export default PgeconnexionPage;
