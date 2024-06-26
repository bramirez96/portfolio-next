import { db } from "~/server/db";
import WelcomeMessage from "./_components/WelcomeMessage";

export const dynamic = "force-dynamic";

// const files = {
//   coder: "https://utfs.io/f/6a4dc840-7e04-4584-9f69-bb7e53088b96-mes7ti.svg",
//   selfie: "https://utfs.io/f/b778596f-2c63-4671-874d-5d105adeaefa-ezf5w8.jpg",
// };

export default async function HomePage() {
  const posts = await db.query.projects.findMany();

  return (
    <main className="flex flex-col gap-4 p-4">
      <div className="flex flex-wrap gap-4">
        <WelcomeMessage />
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </main>
  );
}
