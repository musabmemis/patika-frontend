import propTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {

    if(!isLoggedIn){
        return <div>Giriş Yapmadınız!</div>
    }

  return (
    <>
      
      <h1>{ `${name} ${surname} (${age})`}</h1>
      {address.title} {address.zip}
      <br />
      <br />
      {friends &&
        friends.map((friend) => <div key={friend.id}> {friend.name}</div>)}
    </>
  );
}

User.propTypes = {
  name: propTypes.string.isRequired,
  surname: propTypes.string.isRequired,
  age: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  isLoggedIn: propTypes.bool.isRequired,
  friends: propTypes.array,
  address: propTypes.shape({ title: propTypes.string, zip: propTypes.number }),
};

User.defaultProps = {
    name :"?????",
    isLoggedIn : false
}

export default User;
