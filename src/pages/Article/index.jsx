import React from "react";

import Header1 from "components/Header1";
import { Text, Input } from "components";

const ArticlePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[26px] items-center justify-start w-full">
          <Header1 className="bg-black_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1400px] mx-auto md:px-5 w-full">
            <aside className="flex flex-col md:hidden justify-start w-[119px]">
              <Text
                className="text-black_900 text-left w-auto"
                as="h2"
                variant="h2"
              >
                Article
              </Text>
              <Text
                className="mr-[49px] mt-[849px] text-black_900 text-left w-auto"
                variant="body3"
              >
                Copyright
              </Text>
            </aside>
            <div className="backdrop-opacity-[0.5] bg-bluegray_100_8c blur-[6.00px] border border-black_900 border-solid flex flex-1 items-start justify-start mb-[198px] md:ml-[0] ml-[238px] md:mt-0 mt-[105px] p-3 w-full">
              <div className="flex flex-col items-center justify-start mb-[39px] mt-[15px] w-[93%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[82px] items-start justify-start w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Code article
                  </Text>
                  <Text
                    className="bg-white_A700 font-medium h-8 sm:mt-0 mt-[5px] pl-[17px] sm:pr-5 pr-[35px] text-black_900 text-left underline w-[318px]"
                    as="h6"
                    variant="h6"
                  >
                    107178
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 gap-[84px] items-start justify-start mt-[47px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Désignation
                  </Text>
                  <Text
                    className="bg-white_A700 font-medium h-8 justify-center sm:mt-0 mt-0.5 pl-2.5 pr-1.5 py-[3px] text-black_900 text-left w-[318px]"
                    variant="body1"
                  >
                    FAN BTS HOR IND2 SWHN5289
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[45px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Code EAN
                  </Text>
                  <div className="h-8 md:h-[45px] sm:mt-0 mt-[13px] relative w-[59%] sm:w-full">
                    <div className="absolute bg-white_A700 h-8 inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute bottom-[0] font-medium left-[3%] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      3411949008298
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[35px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Code famille
                  </Text>
                  <div className="md:h-12 h-8 sm:mt-0 mt-4 relative w-[59%] sm:w-full">
                    <div className="absolute bg-white_A700 h-8 inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute bottom-[0] font-medium left-[3%] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      373620
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly mt-[33px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Libellé code famille
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 sm:flex-1 sm:mt-0 mt-[5px] pl-2.5 pr-[35px] py-[3px] w-[59%] sm:w-full"
                    className="font-medium leading-[normal] p-0 placeholder:text-black_900 sm:pr-5 text-black_900 text-left text-xl w-full"
                    name="price"
                    placeholder="ORANGE 2G MOTOROLA"
                  ></Input>
                </div>
                <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[47px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Statut production
                  </Text>
                  <div className="sm:h-8 h-[33px] md:h-[34px] sm:mt-0 mt-0.5 relative w-[59%] sm:w-full">
                    <div className="absolute bg-white_A700 h-8 inset-x-[0] mx-auto top-[0] w-full"></div>
                    <Text
                      className="absolute bottom-[0] font-medium left-[3%] text-black_900 text-left w-auto"
                      variant="body1"
                    >
                      Non éligible
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[43px] w-full">
                  <Text
                    className="font-bold text-black_900 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    Poids
                  </Text>
                  <Text
                    className="bg-white_A700 font-medium h-8 sm:mt-0 mt-[3px] pl-2 sm:pr-5 pr-[35px] pt-[5px] text-black_900 text-left w-[318px]"
                    variant="body1"
                  >
                    1.20
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="mb-0.5 md:ml-[0] ml-[378px] md:mt-0 mt-[891px] text-black_900 text-left w-auto"
              variant="body3"
            >
              FICKOU
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
