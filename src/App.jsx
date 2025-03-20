import { PlayerList, PlayerFilter, PlayerCreate } from "./components";
function App() {
  return (
    <div className="h-screen w-full relative app">
      <div className="absolute inset-0 bg-black/80 blur-3xl z-10" />
      <div className="grid sm:grid-cols-2 gap-4 max-w-9/10 h-full z-20 mx-auto relative pt-12 ">
        <PlayerList />
        <div className="flex flex-col gap-4">
          <PlayerCreate />
          <PlayerFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
