import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-bold text-3xl bg-gradient-to-r from-orange-400 to-rose-400 text-transparent bg-clip-text hover:cursor-pointer">
      FlowForm
    </Link>
  );
};
