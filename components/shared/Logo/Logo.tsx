import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="min-h-20 h-20 flex items-center cursor-pointer">
        <Image src="/logo.svg" alt="Logo" width={120} height={90} priority />
    </Link>
  )
}
