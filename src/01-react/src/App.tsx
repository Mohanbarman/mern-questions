import { FC } from "react";
import Alert from "./app/Alert/Alert";

const App: FC = () => {
  return (
    <div>
      <Alert isDefaultShown={true} message="Hello world" type="warning" />
    </div>
  );
};

export default App;
