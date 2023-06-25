const Tweet = (props) => {
  return (
    <div>
      <h4>
        <b>{props.name}</b> @{props.username}
      </h4>
      <span>{props.time}</span>
      <p>"{props.tweet}"</p>
    </div>
  );
};
