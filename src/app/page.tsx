import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href={"/about"}>Go to About Page</Link>
      <Link href={"/about2"}>Go to About2 Page</Link>
    </div>
  );
}
