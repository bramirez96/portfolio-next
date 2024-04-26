const files = [
  "https://utfs.io/f/6a4dc840-7e04-4584-9f69-bb7e53088b96-mes7ti.svg",
  "https://utfs.io/f/b778596f-2c63-4671-874d-5d105adeaefa-ezf5w8.jpg",
];

const mockImages = files.map((url, index) => ({
  id: index + 1,
  url,
}));

const wallData = [
  ...mockImages,
  ...mockImages,
  ...mockImages,
  ...mockImages,
  ...mockImages,
  ...mockImages,
];

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {wallData.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
