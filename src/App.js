import "./App.css";
import "antd/dist/antd.css";
import BlogCard from "./components/BlogCard";
import { Space } from "./components/Styles";

function App() {
  return (
    <div className="App">
      <BlogCard
        imgURL="https://picsum.photos/200/300"
        name="Halit"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, repellendus commodi laborum voluptatibus distinctio numquam vitae quos aliquam dolorum unde."
        width={419}
        height={249}
        borderRadius={Space[24]}
      />
    </div>
  );
}

export default App;
