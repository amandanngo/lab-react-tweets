function ProfileImage(props){
    return(
        <img
        src={props.imgUrl}
        className="profile"
        alt="profile"
      />
    )
}

export default ProfileImage;