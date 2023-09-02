import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
      <p className="py-10">
        Duis ad veniam ad duis ullamco minim pariatur cupidatat reprehenderit. Anim Lorem aliqua ad commodo amet non. Cillum voluptate incididunt sint pariatur ipsum nisi exercitation ullamco. Culpa deserunt dolore sit ad nulla fugiat esse eu dolor aliqua. Officia velit Lorem non sint esse do anim qui irure ex sunt fugiat cillum fugiat.
      </p>
      <Link href="/about">About Page</Link>
    </div>

  )
}

export default Homepage;

