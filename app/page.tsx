import { getUser, getPostUser } from "@/Utils/getUser";
import Calendario from "@/components/Calendario";
import Posts from "@/components/Posts";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Suspense } from "react";
// export const fetchCache = 'force-cache'

// async function getPosts() {
//   try {
//     console.log('GETPOSTS');
//     const res = await fetch('http://localhost:3000/api/posts', {
//       cache: 'no-store'
//     });
//     console.log('GETPOSTS',res);

//     if (!res.ok) {
//       throw new Error('Erro ao obter os posts');
//     }
//     // console.log('GETPOSTS',res);
//     return res.json();

//   } catch (error) {
//     console.log(error);
//     return null; // ou um valor padrão caso ocorra um erro
//   }
// }

export default async function Home() {
  const session = await getServerSession(authOptions as any);
  // const session = '';
  // @ts-ignore
  const dataValueUser = session ? await getPostUser(session.user.email) : null;

  return (
    <div className="flex flex-col justify-center items-center">
      {dataValueUser ?
      <Suspense fallback={<Skeleton count={3} baseColor="#D3D3D3" borderRadius={12} height={10} width={500} />}>
        <Posts data={dataValueUser}/>
      </Suspense>
      : 
      (
        <div className="flex h-auto">
          <h1 className="text-[#fff] text-lg font-bold">Entre na sua conta para ver os seus registros</h1>
        </div>
      )
      }
    </div>
  )
}
