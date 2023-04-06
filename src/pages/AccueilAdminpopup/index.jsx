import React from "react";

import Header from "components/Header";
import { Text, Img } from "components";
import { useNavigate } from "react-router-dom";

const AccueilAdminpopupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 font-inter h-[1024px] mx-auto relative w-full">
        <div className="absolute flex h-max inset-[0] items-center justify-center m-auto w-full">
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
                onClick={() => navigate("/visualiserarticlesbaseedt")}
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
              <div className="bg-amber_900 h-[38px] md:ml-[0] ml-[242px] mt-[22px] rounded-[19px] w-[14%]"></div>
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
        <Text
          className="absolute h-max inset-y-[0] left-[23%] my-auto text-black_900 text-left w-auto"
          as="h5"
          variant="h5"
        >
          Insérer
        </Text>
        <div className="absolute bg-bluegray_100_a5 h-[1024px] md:h-[429px] inset-[0] justify-center m-auto p-[271px] md:px-5 w-full">
          <div className="absolute bg-white_A700_e2 bottom-[26%] flex inset-x-[0] items-center justify-start mx-auto p-[63px] md:px-10 sm:px-5 w-[48%]">
            <div className="flex flex-col items-start justify-start mb-1 mt-[25px] w-full">
              <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full">
                <Text
                  className="text-black_900 text-left w-auto"
                  as="h2"
                  variant="h2"
                >
                  Un nouveau article a été ajouté
                </Text>
                <div className="flex flex-col gap-2.5 items-center justify-start mt-1 w-auto md:w-full">
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Sur l’application Scaler
                  </Text>
                  <Text
                    className="text-black_900 text-left w-auto"
                    as="h2"
                    variant="h2"
                  >
                    Code article: 12345667
                  </Text>
                </div>
              </div>
              <Text
                className="mt-[3px] text-black_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Voulez-vous l’ajouter sur E-DT?
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between ml-2 md:ml-[0] mt-[39px] w-[92%] md:w-full">
                <Text
                  className="bg-black_900 h-[38px] mb-0.5 sm:px-5 px-[35px] rounded-[19px] text-left text-white_A700 w-[186px]"
                  as="h5"
                  variant="h5"
                >
                  Non
                </Text>
                <Text
                  className="common-pointer bg-amber_900 h-[38px] sm:mt-0 mt-0.5 sm:px-5 px-[35px] rounded-[19px] text-black_900 text-left w-[186px]"
                  as="h5"
                  variant="h5"
                  onClick={() => navigate("/historiquetwo")}
                >
                  Oui
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-black_900 flex inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[303px] top-[31%] w-[48%]">
            <Img
              src="images/img_tlcharger1.png"
              className="h-16 md:h-auto object-cover w-16"
              alt="tlchargerTwo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccueilAdminpopupPage;
