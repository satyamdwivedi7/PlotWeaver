export default function Navbar() {
  return (
    <>
      <nav
        className="flex justify-between items-center px-16 py-4 h-20 bg-[#121212] text-white relative shadow-sm"
        role="navigation"
      >
        <a href="/" className="">
          <img className="w-16" src="/logo-dark.png" alt="" />
        </a>
        <div className="flex items-center justify-center text-xl">
          <div className="pr-8 md:block flex flex-col items-center">
            <a href="/home" className="p-4">
              Explore
            </a>{" "}
            &#x2022;{" "}
            <a href="/faq" className="p-4">
              FAQs
            </a>
            &#x2022;{" "}
            <a href="/" className="p-4">
              Contact Us
            </a>
            &#x2022;{" "}
            <a href="/" className="p-4">
              Our Team
            </a>
          </div>
          <button>
            <img src="/profile.png" alt="profile" className="w-12" />
          </button>
        </div>
      </nav>
      <div className="mx-auto w-[90%] border"></div>
    </>
  );
}
