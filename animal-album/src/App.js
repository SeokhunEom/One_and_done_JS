import Content from "./components/Content.js";
import TabBar from "./components/TabBar.js";
import { request } from "./components/api.js";

export default function App(app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  const init = async () => {
    try {
      const initialPhotos = await request(this);
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const tabBar = new TabBar({
    app,
    initialState: "",
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await request(name === "all" ? "" : name),
      });
    },
  });
  const content = new Content({
    app,
    initialState: [],
  });

  init();
}
