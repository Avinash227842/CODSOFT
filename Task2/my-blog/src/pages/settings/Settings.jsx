import Aboutsection from '../../components/aboutsection/Aboutsection'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Account</span>
          <i className="settingsTitleDelete fa-regular fa-trash-can"></i>
          

        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <div className="img">
              
            </div>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Avinash" name="name" />
          <label>Email</label>
          <input type="email" placeholder="avinashchaudhary216@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
        </div>
        <Aboutsection/>
    </div>
  )
}
