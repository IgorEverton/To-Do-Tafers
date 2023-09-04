import Link from "next/link";

export default function Botao({
  children,
  icon,
  elemento = "link",
  variant = "primary",
  ...props
}) {
  const styles = {
    primary: " bg-pink-600 hover:bg-pink-800",
    secudary: "border-2 border-slate-400 hover:bg-slate-800",
  };

  const classVariant = `flex items-center gap-1 rounded ${styles[variant]}`;

  return (
    <>
      {elemento === "link" ? 
        <Link href="#" {...props} classVariant>
          {icon}
          {children}
        </Link>
       :
       <div>
          {icon}
        <input value={children} type="submit" href="#" {...props} />
       </div>
      }
    </>
  );
}
