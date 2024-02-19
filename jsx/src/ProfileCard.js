function ProfileCard(props){

    const {title,handle,image,describe}=props;

    return <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                 <img src={image} alt="pda logo"></img>
            </figure>
        </div>
       <div className="card-content">
        <div className="media-content">
              <p className="title is-4">{title}   </p>
        <p className="subtitle is-6"> {handle}  </p>
        </div>
        <div className="content">{describe}</div>
       </div>
      
     
    </div>
}
export default ProfileCard;