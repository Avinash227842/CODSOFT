import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postImg">
          
        </div>
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Social</span>
            <span className="postCat">Chat</span>
          </div>
          <span className="postTitle">
            Gossip Hub
          </span>
          <hr/>
          <span className="postDate">6 Mar 2023</span>
        </div>
        <p className="postDesc">
        A full fledged MERN stack application that lets you connect with people and exchange information with authentication facility to ensure security . This application uses React for frontend and NodeJs as backend
        </p>
    </div>
  )
}
