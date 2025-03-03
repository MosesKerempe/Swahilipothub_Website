import Head from "next/head";
import Events from "@/components/landing/Events";
import Numbers from "@/components/landing/Numbers";
import Partners from "@/components/landing/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <title>SwahiliPot Hub</title>
        <meta name="description" content="Welcome to SwahiliPot Hub" />
      </Head>

      <main>
        {/* Hero Section (if exists) */}
        {/* <Hero /> */}

        {/* Events Section */}
        <Events />

        {/* Numbers Section */}
        <Numbers />

        {/* Partners Section */}
        <Partners />
      </main>
    </>
  );
}
