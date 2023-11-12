import Link from "next/link";

export default function HeaderTitle() {
  return (
    <Link href={"/"}>
      <div className="text-2xl  font-bold text-center">Cứu truyện</div>
    </Link>
  );
}
