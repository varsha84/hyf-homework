import "./App.css";

function Comment(props) {
  return (
    <li className="comment">
      <h3>{props.author}</h3>
      <p>{props.text}</p>
    </li>
  );
}

function Post(props) {
  const commentsToRender = props.commentsList.map((aComment) => {
    return <Comment author={aComment.author} text={aComment.text} />;
  });

  return (
    <div className="post">
      <h2>{props.author}</h2>
      <p>{props.text}</p>
      <ul className="comments">{commentsToRender}</ul>
    </div>
  );
}

export default Post;
