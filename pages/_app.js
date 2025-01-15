import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Youtube from "../components/Youtube"; // import Youtube component
import RichText from "../components/RichText"; // import RichText component

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  youtube: Youtube, // register Youtube component
  richText: RichText, // register RichText component
};

storyblokInit({
  accessToken: "N00OTv4BZWnQdHMaM3YibQtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
