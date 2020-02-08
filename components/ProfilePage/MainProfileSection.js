import Link from 'next/link';
import React from "react";
import StudentProfile from './StudentProfile';
import PartnerProfile from './PartnerProfile';
import TeacherProfile from './TeacherProfile';


const MainProfileSection = props => (
  <div className="student-profile py-4">
    <div className="container">
      <h2>Мой профиль</h2>
      <hr/>
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
              <img src="//placehold.it/200" className="avatar img-circle" alt="avatar"/>
                <h6>Загрузить другую фотографию...</h6>
                <input type="file" className="form-control"/>
            </div>
          </div>
          <div className="col-md-9 personal-info">
            <h3>Основновная информация</h3>
            <form className="form-horizontal form-profile" role="form">
              <div className="form-group row">
                <label className="col-lg-2 control-label">Имя</label>
                <div className="col-lg-10">
                  <input className="form-control" type="text" value={props.user.first_name}/>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-lg-2 control-label">Фамилия</label>
                <div className="col-lg-10">
                  <input className="form-control" type="text" value={props.user.last_name} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-lg-2 control-label">Email</label>
                <div className="col-lg-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail"
                         value={props.user.email} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">Телефонный номер</label>
                <div className="col-md-10">
                  <input className="form-control" type="text" value={props.user.phone_number} />
                </div>
              </div>
              <button className="btn btn-secondary btn-md" type="submit">Сохранить изменения</button>
              <button className="btn btn-secondary btn-md btn-email" type="changeEmail">Изменить email</button>
              <button className="btn btn-secondary btn-md btn-password" type="changePassword">Изменить пароль</button>
            </form>
            <hr />
            <h3>Дополнительная информация</h3>
            {props.user.student_profile ? <StudentProfile student={props.user.student_profile}/> : ""}
            {props.user.teacher_profile ? <TeacherProfile student={props.user.teacher_profile}/> : ""}
            {props.user.partner_profile ? <PartnerProfile student={props.user.partner_profile}/> : ""}
          </div>
        </div>
    </div>
  </div>
);

export default MainProfileSection;