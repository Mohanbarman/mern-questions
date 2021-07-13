import Alert from "./app/Alert/Alert";

const App = () => {
  return (
    <div>
      <Alert isDefaultShown={true} message="Hello world" type="warning" />
    </div>
  );
};

export default App;
