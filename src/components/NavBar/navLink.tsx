import { cn } from "@/lib/utils";

type Props = {
  text: string;
  href: string;
  className?: string;
};

export function NavLink({ text, href, className, ...props }: Props) {
  return (
    <a
      href={href}
      className={cn(
        "text-sm uppercase px-2 py-2 rounded-md transition-colors cursor-pointer font-semibold",
        "hover:bg-slate-700 hover:text-white hover:scale-105",
        className
      )}
      {...props}
    >
      {text}
    </a>
  );
}
