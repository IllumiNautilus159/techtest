import _m from "../../data/moves.json";
import colors from "../../data/typeColors.json";
import { NextPage, NextPageContext } from "next";
import { useRouter } from 'next/router';
import Image from "next/future/image";
import moveImage from "public/bodySlam.jpg";
import { Move } from "../../types/moves";
 
function Page() {
  const router = useRouter()
  const currentMove = router.query.move;
  const moveData = _m.filter((m)=>{
    return m.name == currentMove ?
    (m):false
  });

  const bgColor = (moveName:Move)=>{
    console.log(moveName);
    const c = colors.filter(({name,value})=>{
      return name == moveName?.type ? true : false
    })
    console.log(c)
    return c[0]
  };
console.log(bgColor)
  return <div className="resultSection p-10 w-full content-center" style={{
    "backgroundColor":bgColor(moveData[0])?.value}}>
    <a className="bg-gray-500 text-center m-auto w-1/5 m-[auto] rounded-md p-2 h-full block" href='/'>
        <button >Return Home</button>
    </a> 
    <Image src={moveImage} className="rounded-full h-52 w-52 m-[auto] my-12"></Image>
  {moveData?.map((data)=>(
        <div key={data.identifier} className="w-1/2 h-[100vh] m-auto align-middle m-top-10 block">
            {Object.keys(data).map((key,i)=>(
                <p key={key} className="text-center block m-5 capitalize">
                    {`${key}: ${data[key]}`}
                </p>
            ))
            }
        </div>
  ))}</div>
}

const page : NextPage = Page;

export default page;