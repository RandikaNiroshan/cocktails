import { Title } from "./components";
import { Cocktails, Home, Popular, Stats } from "./containers";

function App() {
  return (
    <>
      <Home />
      <Title className="mt-10" title="Cocktails from around the world"/>
      <Stats />
      <Title className="mt-4 mb-4" title="Most popular cocktails"/>
      <Popular />
      <Cocktails />
    </>
  );
}

export default App;
