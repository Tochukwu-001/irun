import Link from "next/link";

export default function Index(){
  return (
    <>
      <main className="h-screen">
        <div className=" h-full w-full justify-center items-center hidden lg:flex bg-desktop">
          <div className="w-full h-full bg-[#402B3A]/50 flex justify-center items-center">
            <div className="w-full md:w-[520px] flex items-center justify-center flex-col gap-6 px-4 md:px-0">
              <h1 className="text-4xl text-center text-[#F8F4EC] lg:text-6xl">Shop for hairs and book an appointment for a fix</h1>
              <Link href='/auth/signup' className="h-[48px] w-full md:w-[300px] bg-[#402B3A] text-[#F8F4EC] text-2xl px-4 flex justify-center items-center rounded-md"> Get Started </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:hidden bg-mobile">
        
        </div>
      </main>
    </>
  );
}