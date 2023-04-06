import React from "react";

import Header from "components/Header";
import { Text, Img, List } from "components";
import { useNavigate } from "react-router-dom";

const VisualiserarticlesScalerTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[31px] items-center justify-start w-full">
          <Header className="bg-black_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
              <Text
                className="text-black_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Articles Scaler
              </Text>
              <Text
                className="bg-bluegray_100_7f border border-black_900 border-solid font-medium h-[47px] pb-1 pt-3 sm:px-5 px-[35px] text-black_900 text-left w-[399px]"
                as="h6"
                variant="h6"
              >
                Recherche
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1.5 md:ml-[0] mt-[52px] w-[98%] md:w-full">
              <Text
                className="font-bold mb-0.5 text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Code article
              </Text>
              <Img
                src="images/img_arrowdown_black_900.svg"
                className="h-6 md:ml-[0] ml-[7px] md:mt-0 mt-[3px] w-auto"
                alt="arrowdown_One"
              />
              <Text
                className="font-bold md:ml-[0] ml-[34px] md:mt-0 mt-0.5 text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Désignation
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[69px] text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Code EAN
              </Text>
              <Text
                className="font-bold mb-0.5 md:ml-[0] ml-[58px] text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Code famille
              </Text>
              <Text
                className="font-bold mb-0.5 md:ml-[0] ml-[42px] text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Libellé code famille
              </Text>
              <Text
                className="font-bold md:ml-[0] ml-[33px] md:mt-0 mt-0.5 text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Statut production
              </Text>
              <Text
                className="font-bold mb-0.5 md:ml-[0] ml-[42px] text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Poids
              </Text>
            </div>
            <div className="bg-bluegray_100 h-2 mt-[9px] w-[98%]"></div>
            <List
              className="flex-col gap-[17px] grid items-center md:ml-[0] ml-[3px] mt-[41px] w-[97%]"
              orientation="vertical"
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                <Text
                  className="common-pointer font-medium mb-[5px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                  onClick={() => navigate("/articletwo")}
                >
                  12345667
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[91px] md:mt-0 mt-1 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  NOUVEAU6737 AJ
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[33px] md:mt-0 mt-1 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  30099887776555
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[33px] md:mt-0 mt-1 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  378990
                </Text>
                <Text
                  className="font-medium ml-20 md:ml-[0] md:mt-0 mt-[7px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE NEW GI
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[142px] md:mt-0 mt-2.5 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium md:ml-[0] ml-[103px] md:mt-0 mt-2.5 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  12
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <Text
                  className="font-medium mb-[13px] text-black_900 text-left underline w-auto"
                  as="h6"
                  variant="h6"
                >
                  107178
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[127px] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  FAN BTS HOR IND2
                </Text>
                <Text
                  className="font-medium ml-7 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  3411949008298
                </Text>
                <Text
                  className="font-medium ml-12 sm:ml-[0] sm:mt-0 mt-3 text-black_900 text-left w-auto"
                  variant="body1"
                >
                  373620
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[81px] sm:mt-0 mt-[15px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  ORANGE 2G MOTOROLA
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[67px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Non éligible
                </Text>
                <Text
                  className="font-medium sm:ml-[0] ml-[103px] sm:mt-0 mt-[18px] text-black_900 text-left w-auto"
                  variant="body1"
                >
                  1.20
                </Text>
              </div>
            </List>
            <div className="flex flex-row gap-[5px] items-start justify-end ml-auto mt-[43px] w-[11%] md:w-full">
              <Text
                className="font-bold mt-0.5 text-black_900 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Page 1- 50
              </Text>
              <Img
                src="images/img_play.svg"
                className="h-[27px] w-auto"
                alt="play"
              />
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[13px] w-full">
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

export default VisualiserarticlesScalerTwoPage;
