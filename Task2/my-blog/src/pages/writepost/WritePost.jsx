import { Back } from '../../components/common/back/Back'
import './writePost.css'

export default function writePost() {
  return (
    <>
    <Back title="Write blog"/>
    <div className="writePost">
      <img
        className="writePostImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writePostForm">
        <div className="writePostFormGroup">
          <label htmlFor="fileInput">
          <i className="writePostIcon fa-solid fa-circle-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writePostInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            />
        </div>
        <div className="writePostFormGroup">
          <textarea
            className="writePostInput writePostText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writePostSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
    </>
  )
}
