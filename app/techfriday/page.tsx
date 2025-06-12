import TechFridayPage from "@/components/Techfriday";

 export const metadata = {
  title: "#TechFriday | SRIYOG Consulting",
  description:"TechFriday is an impactful virtual learning initiative proudly organized by SRIYOG Consulting Pvt. Ltd.",
  keywords: "techfriday, IT consulting, learing,  ",
  authors: [{ name: "SRIYOG Consulting", url: "https://sriyog.com/techfriday" }],
  openGraph: {
    title: "#TechFriday | SRIYOG Consulting",
    description: "TechFriday is an impactful virtual learning initiative proudly organized by SRIYOG Consulting Pvt. Ltd.",
    url: "https://sriyog.com/techfriday",
    siteName: "SRIYOG Consulting",
    images: [
      {
        url: "https://sriyog.com/images/techfriday/hero.jpg",
        width: 1200,
        height: 630,
        alt: "OG banner", 
      },
    ],
  },
}


export default function TechFriday() {
 return(
<TechFridayPage/>
 )
    

}
