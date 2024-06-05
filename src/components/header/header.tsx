import LogoImage from "./logo";
import SignInButton from "./sign-in-button";

export function Header() {
  return (
    // <nav className="z-50 w-full bg-White dark:bg-DarkBg px-5 py-2 shadow-[0_0.33px_0_0_#BDC5CD] dark:shadow-[0_0.33px_0_0_#313234] flex items-center">
    <nav className="z-50 w-full bg-White px-5 py-2 shadow-[0_0.33px_0_0_#BDC5CD] flex items-center">
      <div className="xl:container px-6 w-full flex items-center gap-2 justify-between md:gap-4">
        <div className="cursor-pointer">
          <LogoImage />
        </div>
        <SignInButton />
      </div>
    </nav>
  );
}
