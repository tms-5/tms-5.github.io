import { configureStore } from "@reduxjs/toolkit";
import topBarRedux from "../topbar.redux";

export default configureStore({
  reducer: {
    topBarRedux: topBarRedux,
  },
});
