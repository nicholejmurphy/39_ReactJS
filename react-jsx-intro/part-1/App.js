const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Nicky" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
