
import Card from './Card';

function UsersList(props) {
  return( 
  <div> 
      {props.totalUsers !== 0 &&<div className="usersCount" > Total users count {props.totalUsers}</div>}
      {props.profiles.map(i => <Card key={i.id} {...i}/>)}
    </div>
  );
}
export default UsersList;