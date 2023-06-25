const App = () => {
  return (
    <div>
      <Person
        name="Nicky"
        age="25"
        hobbies={["boating", "cooking", "running", "travel"]}
      />
      <Person
        name="Chris"
        age="25"
        hobbies={["boating", "cooking", "running", "travel"]}
      />
      <Person
        name="Alexandria"
        age="17"
        hobbies={["boating", "cooking", "running", "travel"]}
      />
      <Person
        name="Elizabeth"
        age="12"
        hobbies={["boating", "cooking", "running", "travel"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
