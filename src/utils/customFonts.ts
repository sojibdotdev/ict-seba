import localFont from "next/font/local";

export const hindSiliguriFonts = localFont({
  src: [
    {
      path: "../app/fonts/Hind_Siliguri/HindSiliguri-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../app/fonts/Hind_Siliguri/HindSiliguri-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/Hind_Siliguri/HindSiliguri-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../app/fonts/Hind_Siliguri/HindSiliguri-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },
    {
      path: "../app/fonts/Hind_Siliguri/HindSiliguri-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-hindSiliguri",
});
