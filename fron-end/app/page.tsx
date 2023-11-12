
'use client'
import HotTruyenComponent from "@/components/HotTruyen/HotTruyenComponent";
import NewUpdeatedItem from "../components/NewUpdated/NewUpdeatedItem";
import { useEffect, useState } from "react";
import  axios  from 'axios';
import Loading from "@/components/Loading";
import OutStanding from "@/components/OutStanding/OutStanding";
import TranslationGroup from "@/components/TranslationGroup/TranslationGroup";

export default function Home() {

  const [productList, setProductList] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get("http://localhost:8000/products");
      setProductList(res.data);
    };
    getProduct();
  }, []);
  if (!productList) {
    return <Loading/>
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">

      <div className="h-full  bg-stone-200 w-screen">
        <section className="">
          {" "}
          <HotTruyenComponent blogs={productList} />
        </section>
        <section className="pb-[100px]">
        <NewUpdeatedItem blogs={productList}/>
        </section>
        <section className="pb-[60px]">
          <OutStanding blogs={productList}/>
        </section>
        <section className="pb-[100px]">
          <TranslationGroup />
        </section>
      </div>
    </main>
  );
}
