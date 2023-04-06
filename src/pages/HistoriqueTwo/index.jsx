import React from "react";

import Header1 from "components/Header1";
import { Text, ReactTable } from "components";
import { createColumnHelper } from "@tanstack/react-table";

const HistoriqueTwoPage = () => {
  const tableData1 = React.useRef([
    {
      codearticle: "Insertion",
      dsignation: "Insertion",
      typedaction: "Ajout",
      date: "27-01-2023",
    },
    {
      codearticle: "FAN BTS HOR IND2 SWHN5289",
      dsignation: "Modification",
      typedaction: "Modification",
      date: "Modification",
    },
    {
      codearticle: "Ajout",
      dsignation: "25-01-2023",
      typedaction: "25-01-2023",
      date: "25-01-2023",
    },
    {
      codearticle: "Insertion",
      dsignation: "CORDON RACCORD RJ45 MAL",
      typedaction: "27-01-2023",
      date: "27-01-2023",
    },
  ]);
  const columnHelper1 = createColumnHelper();
  const column1 = [
    columnHelper1.accessor("codearticle", {
      cell: (info) => (
        <Text
          className="font-medium sm:mt-0 mt-[201px] sm:pl-5 pl-[35px] text-black_900 text-left"
          as="p"
          variant="h6"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="min-w-[360px] pb-[5px] text-black_900 text-left"
          as="p"
          variant="h4"
        >
          Code article
        </Text>
      ),
    }),
    columnHelper1.accessor("dsignation", {
      cell: (info) => (
        <Text
          className="font-medium sm:mt-0 mt-[201px] sm:pl-5 pl-[35px] text-black_900 text-left"
          as="p"
          variant="h6"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="min-w-[393px] py-0.5 text-black_900 text-left"
          as="p"
          variant="h4"
        >
          Désignation
        </Text>
      ),
    }),
    columnHelper1.accessor("typedaction", {
      cell: (info) => (
        <Text
          className="font-medium pb-[-12px] pt-[35px] text-black_900 text-left"
          as="p"
          variant="h6"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="min-w-[367px] py-0.5 text-black_900 text-left"
          as="p"
          variant="h4"
        >
          Type d’action
        </Text>
      ),
    }),
    columnHelper1.accessor("date", {
      cell: (info) => (
        <Text
          className="font-medium sm:mt-0 mt-[201px] pl-[-367px] text-black_900 text-left"
          as="p"
          variant="h6"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="min-w-[147px] pt-[5px] text-black_900 text-left"
          as="p"
          variant="h4"
        >
          Date
        </Text>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[29px] items-center justify-start w-full">
          <Header1 className="bg-black_900 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col items-start justify-start max-w-[1400px] mx-auto md:px-5 w-full">
            <Text
              className="text-black_900 text-left w-auto"
              as="h2"
              variant="h2"
            >
              Historique
            </Text>
            <div className="overflow-auto mt-[33px] w-[91%]">
              <ReactTable
                columns={column1}
                data={tableData1.current}
                rowClass={""}
                headerClass=""
              />
            </div>
            <div className="flex flex-row md:gap-10 items-start justify-between mt-[495px] w-full">
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

export default HistoriqueTwoPage;
