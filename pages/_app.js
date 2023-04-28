import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/Header.css";
import { useRouter } from "next/router";
import "@/styles/character.css";
import "@/styles/episode.css";
import "@/styles/about.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {!(router.route === "/_error") && <Header />}
      <Component {...pageProps} />
    </>
  );
}
