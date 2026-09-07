import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tonovox Technologies | AI Solutions For Smarter Business",
    short_name: "Tonovox",
    description:
      "Tonovox Technologies builds AI Voice Agents, Conversational Chatbots, Intelligent Automation, and high-performance Web Applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F5",
    theme_color: "#111111",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
