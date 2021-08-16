
const Card = (props) => (
  <div className="github-profile">
    <img src={props.avatarUrl} alt="profile" />
    <div className="info">
      <div className="name"><a href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a></div>
      <div className="company">{props.company}</div>
      <div>{(props.followers === undefined)? 0 : props.followers.totalCount}</div>
    </div>
    <p>{props.bio}</p>
  </div>
);

export default Card;
