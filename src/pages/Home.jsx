import Navbar from "../components/Navbar"
import AllPosts from "../components/AllPosts"
import FootBox from "../components/FootBox"
import Login_footer from "../components/Login_footer"

export default function Home(){
    return (
      <>
        <div className="bg-[#121212] h-full px-16">
          <Navbar />
          <AllPosts />
          <FootBox />
        </div>
        <Login_footer />
      </>
    );
}