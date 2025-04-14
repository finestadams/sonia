"use client";

import Cards from "@/components/Cards";
import DropDownComponent from "@/components/DropDowns";

import { FileInterface, SortOption } from "@/interfaces/general.interfaces";
import { getAndProcessCSV } from "@/server";
import { CREATED_AT } from "@/type/types";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<FileInterface[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>(CREATED_AT);

  useEffect(() => {
    (async () => {
      const response = (await getAndProcessCSV(sortBy)) as FileInterface[];

      setData(response);
    })();
  }, [sortBy]);

  return (
    <div className="w-full md:w-md lg:w-sm xl:w-3xl mx-auto pt-10 md:pt-16 lg:pt-24">
      <div className="flex justify-center items-start mb-10 gap-4">
        <DropDownComponent
          onChange={(value: SortOption) => setSortBy(value)}
          sortBy={sortBy}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        {data?.map((item, index) => (
          <Cards key={index} items={item} />
        ))}
      </div>
    </div>
  );
}
