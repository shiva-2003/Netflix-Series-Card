const Profile = () => {
  return (
    <div>
      <ProfileCard
        name="Shiva"
        age={21}
        greeting={
          <div>
            <p>
              <strong>Hey Shiva, How are YOU?</strong>
            </p>
          </div>
        }
      >
        <p>Hobbies: Loves to listen musics,swimming,</p>
        <button>Contact</button>
      </ProfileCard>
    </div>
  );
};

export default Profile;

function ProfileCard({name,age,greeting,children}){
    // const {name,age,greeting,children}=Props
    return[
        <>
        <h3>Name:{name}</h3>
        <p>Age:{age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    ]
}