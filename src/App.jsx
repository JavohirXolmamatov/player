import { AddUserForm, AddUserList, UserFilter } from "./components/index";
function App() {
  return (
    <div className="h-screen w-full relative app">
      <div className="absolute inset-0 bg-black/80 blur-3xl z-10" />
      <div className="grid grid-cols-2 gap-4 container max-w-7xl h-full z-20 mx-auto relative pt-12">
        <AddUserList />
        <div className="flex flex-col gap-4">
          <AddUserForm />
          <UserFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
