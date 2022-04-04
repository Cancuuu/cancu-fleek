export default function Home() {
  const state = [];

  return (
    <div className="h-screen w-screen">
      {state.map((note) => {
        return <li key={note.id}>{note.content}</li>;
      })}
    </div>
  );
}
