const App = () => {
  return (
    <div>
      <Tweet
        name="Nicky Murphy"
        username="nickmurph"
        tweet="What should I make for dinner??"
        time="Sun June 25, 2023 16:39"
      />
      <Tweet
        name="Chris Coombs"
        username="cwcoombs"
        tweet="Almost done with work and all the backpacks are clean!"
        time="Sun June 25, 2023 16:39"
      />
      <Tweet
        name="Ali Kelly"
        username="akells"
        tweet="Newly refurbished dresser for sale!"
        time="Sun June 25, 2023 09:22"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
