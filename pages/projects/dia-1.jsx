import ImgWrapper from "../../components/dia-1/ImgWrapper";
import Head from 'next/head'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dia 1</title>
      </Head>

      <ImgWrapper />

      <style jsx>{`
      
          .container {
              height: 100vh;
              display: grid;
              justify-items: center;
              align-items: center;
          }
      
      `}</style>


    </div>
  )
}
