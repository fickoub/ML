import React from "react";

import Header from "components/Header";
import { Text } from "components";
import { useNavigate } from "react-router-dom";

const AccueilAdminTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:gap-10 gap-[65px] items-center justify-start w-full">
          <Header className="bg-black_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto md:px-5 w-full">
            <Text
              className="text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Visualiser articles Scaler
            </Text>
            <Text
              className="common-pointer bg-amber_900 h-[38px] ml-60 md:ml-[0] mt-2 pl-[27px] pr-[21px] sm:px-5 rounded-[19px] text-black_900 text-left w-[186px]"
              as="h5"
              variant="h5"
              onClick={() => navigate("/visualiserarticlesscaler")}
            >
              Visualiser
            </Text>
            <Text
              className="mt-[46px] text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Visualiser article base E-DT
            </Text>
            <Text
              className="common-pointer bg-amber_900 h-[38px] justify-center md:ml-[0] ml-[242px] mt-[21px] sm:px-5 px-6 py-0.5 rounded-[19px] text-black_900 text-left w-[186px]"
              as="h5"
              variant="h5"
              onClick={() => navigate("/visualiserarticlesscalertwo")}
            >
              Visualiser
            </Text>
            <Text
              className="mt-[29px] text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Insérer articles base E-DT
            </Text>
            <div className="h-[38px] md:h-[60px] md:ml-[0] ml-[242px] mt-[22px] relative w-[14%]">
              <div className="absolute bg-amber_900 h-[38px] inset-[0] justify-center m-auto rounded-[19px] w-full"></div>
              <Text
                className="absolute right-[21%] text-black_900 text-left top-[0] w-auto"
                as="h5"
                variant="h5"
              >
                Insérer
              </Text>
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[477px] w-full">
              <Text
                className="mt-0.5 text-black_900 text-left w-auto"
                variant="body3"
              >
                Copyright
              </Text>
              <Text
                className="mb-0.5 text-black_900 text-left w-auto"
                variant="body3"
              >
                FICKOU
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccueilAdminTwoPage;
