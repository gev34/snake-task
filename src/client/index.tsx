import { createRoot } from "react-dom/client";
import  Snake  from "./Snake";

const container = document.getElementById("root")!;
createRoot(container).render(<Snake />);