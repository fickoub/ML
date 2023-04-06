import React from "react";

import Header from "components/Header";
import { Text, Button } from "components";

const AccueilUserPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[38px] items-center justify-start w-full">
          <Header className="bg-black_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto md:px-5 w-full">
            <Text
              className="text-black_900 text-left w-auto"
              as="h4"
              variant="h4"
            >
              Envoyer un message à l’admin
            </Text>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start ml-12 md:ml-[0] mt-11 w-[38%] md:w-full">
              <Text
                className="font-semibold text-black_900 text-left w-auto"
                variant="body1"
              >
                Message:
              </Text>
              <div className="bg-bluegray_100_aa flex items-start justify-start sm:mt-0 mt-[3px] p-2.5 w-auto sm:w-full">
                <Text
                  className="mb-[150px] text-black_900 text-left w-auto"
                  variant="body4"
                >
                  Ecrivez votre mesage
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-4 w-[39%] md:w-full">
              <Text
                className="font-bold text-black_900 text-left w-auto"
                variant="body1"
              >
                Pièces jointes:
              </Text>
              <Button className="bg-bluegray_100 border border-black_900 border-solid cursor-pointer font-semibold leading-[normal] mb-1 min-w-[169px] ml-3.5 sm:ml-[0] py-1 shadow-bs text-[15px] text-black_900 text-center w-auto">
                Choissisez un fichier
              </Button>
              <Text
                className="font-semibold ml-3.5 sm:ml-[0] sm:mt-0 mt-2 text-black_900 text-left w-auto"
                variant="body2"
              >
                piècejointe.PDF
              </Text>
              <div className="bg-gray_500 flex h-[30px] items-end justify-start sm:ml-[0] ml-[54px] sm:mt-0 mt-0.5 p-0.5 rounded-[50%] w-[30px]">
                <Text
                  className="font-bold mr-[5px] text-left text-white_A700 w-auto"
                  variant="body1"
                >
                  ?
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[39px] items-start justify-start md:ml-[0] ml-[158px] mt-3.5 w-[32%] md:w-full">
              <Text
                className="font-medium sm:mt-0 mt-1 text-black_900 text-left w-auto"
                variant="body2"
              >
                Format de fichiers: PNJ, JPG, JPEG, PDF
              </Text>
              <div className="h-[25px] relative w-[26%] sm:w-full">
                <div className="absolute bg-black_900 h-[23px] inset-x-[0] mx-auto rounded-[11px] top-[0] w-full"></div>
                <Text
                  className="absolute font-bold h-full inset-y-[0] my-auto right-[11%] text-left text-white_A700 w-auto"
                  variant="body1"
                >
                  Envoyer
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[521px] w-full">
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

export default AccueilUserPage;
