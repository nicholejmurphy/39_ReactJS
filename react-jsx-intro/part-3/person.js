const Person = (props) => {
  let canVote;
  if (props.age < 18) {
    canVote = false;
  } else {
    canVote = true;
  }
  let name;
  if (props.name.length > 8) {
    name = props.name.slice(0, 8);
  } else {
    name = props.name;
  }
  return (
    <div>
      <p>Learn some more informationa out this person!</p>
      <p>Name: {name}</p>
      <p>Age: {props.age}</p>
      <h3>{canVote ? "Please go vote!" : "You must be 18."}</h3>
      <p>
        Hobbies:
        <ul>
          {props.hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};
