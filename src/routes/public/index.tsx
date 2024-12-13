import { BrowserRouter } from "react-router-dom";

// Serch app
import BlogModule from "@/modules/blog";

export default function PublicRouter() {
  return (
    <>
      <BrowserRouter>
        <BlogModule />
      </BrowserRouter>
    </>
  );
}
