import Link from 'next/link';
import React from "react";
import axios from "axios";


// const AvatarForProfile = props => (
class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: props.avatar
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('avatar', this.state.avatar);
    const response = await axios.patch(`${this.props.url}`, form_data,{
      headers: {
        authorization: `JWT ${this.props.token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    if (response.status === 200) {
      alert('Фотогрфаия успешно обновлена!');
    }
  };
  render() {
    return <div className="text-center">
    {/*<img src="//placehold.it/200" className="avatar img-circle" alt="avatar"/>*/}
    {this.props.avatar ? <img src={this.props.avatar} alt="avatar" /> : <img src="static/default_user.jpg" alt="avatar" />}
    <hr />
    {/*<h6>Загрузить другую фотографию...</h6>*/}
    {/*<input type="file" className="form-control"/>*/}
    {/*<button className="btn btn-secondary btn-md" type="submit">Изменить</button>*/}
    <form
      onSubmit={this.handleSubmit.bind(this)}
      // onSubmit={this.handleSubmit}
    >
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"
                   className="form-control"
                   // onChange={this.handleImageChange}
                   onChange={e => this.setState({ avatar: e.target.files[0] })}
                   required/>
          <button className="btn btn-secondary btn-md" type="submit">Изменить</button>
        </form>
  </div>
  }
}

export default ProfileAvatar;