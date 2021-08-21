import { observer } from "mobx-react-lite";

import PageDrawer from "../components/drawer";
import HalfAdderComponent from "../components/halfAdder/halfAdderComponent";
import drawerStore from "../store/DrawerStore";

const Home = observer(() => {
  return (
    <div className="px-4 py-4 flex flex-col items-center justify-evenly h-screen">
      <PageDrawer />
      {drawerStore.currentPage === "Half Adder" && <HalfAdderComponent />}
    </div>
  );
});

export default Home;
