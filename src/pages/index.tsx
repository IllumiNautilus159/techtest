import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import snorlax from "public/snorlax.webp";
import moves from "../data/moves.json";
import { useCallback, useMemo } from "react";
import { Move } from "../types/moves";
import { Table } from "../components/molecules/Table";

const Home: NextPage = () => {
  const getCellProps = useCallback(() => {
    return { className: "px-2 py-6 text-center" };
  }, []);

  const getRowProps = useCallback(() => {
    return {
      className: "border-b",
    };
  }, []);

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Type", accessor: "type" },
      { Header: "Damage", accessor: "damage" },
      { Header: "pp", accessor: "pp" },
      { Header: "Potential", accessor: "potential" }
    ],
    []
  );

  const TableData = (()=>{

    const newMoves=[];

    moves.forEach((m)=>{

      const newMove =[];

      Object.keys(m).map((key)=>{
        newMove[key]=m[key];
      })

      newMove['potential']=parseInt(m.pp) * parseInt(m.damage);
      newMoves.push(newMove);

    })

    console.log(newMoves);
    return newMoves;

  })

  return (
    <>
      <Head>
        <title>Body Slam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <div className="flex">
          
          <Image
            src={snorlax}
            alt="Snorlax image"
            height={513}
            className="pr-12"
          />
          <Table
            columns={columns}
            data={moves as Move[]}
            getCellProps={getCellProps}
            getRowProps={getRowProps}
          />
        </div>
        {/* TODO uncomment for trpc example */}
        {/* <footer className="p-6 text-center">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </footer> */}
      </main>
    </>
  );
};

export default Home;
