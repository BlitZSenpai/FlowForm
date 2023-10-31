import { UserButton } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <Logo />
      <ThemeSwitcher />
      <UserButton afterSignOutUrl="/sign-in" />
      {children}
    </div>
  );
};
export default DashboardLayout;
