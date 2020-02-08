import Link from 'next/link';
import React from "react";


const StudentProfile = props => (
  <form className="form-horizontal form-profile" role="form">
    <div className="form-group row">
      <label className="col-lg-2 control-label">Имя (Латиницей)</label>
      <div className="col-lg-10">
        <input className="form-control" type="text" value={props.student.first_name_lat}/>
      </div>
    </div>
    <div className="form-group row">
      <label className="col-lg-2 control-label">Фамилия (Латиницей)</label>
      <div className="col-lg-10">
        <input className="form-control" type="text" value={props.student.last_name_lat} />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-lg-2 control-label">Дата рождения</label>
      <div className="col-lg-10">
        <input className="form-control" type="text" value={props.student.birth_date} placeholder="1999-01-25" />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-lg-2 control-label">Пол</label>
      <div className="col-lg-10">
        <div className="ui-select">
          <select id="user_country" className="form-control">
            <option value="m">Мужской</option>
            <option value="f">Женский</option>
            <option value="0">Не указано</option>
          </select>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <label className="col-lg-2 control-label">Страна</label>
      <div className="col-lg-10">
        <div className="ui-select">
          <select id="user_country" className="form-control">
            <option value="RU">Россия</option>
            <option value="BY">Беларусь</option>
            <option value="UA">Украина</option>
            <option value="KZ">Казахстан</option>
            <option value="NA">Не указано</option>
          </select>
        </div>
      </div>
    </div>
    <div className="form-group row">
      <label className="col-md-2 control-label">Город</label>
      <div className="col-md-10">
        <input className="form-control" type="text" value={props.student.city} />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-md-2 control-label">Компания</label>
      <div className="col-md-10">
        <input className="form-control" type="text" value={props.student.company} />
      </div>
    </div>
    <div className="form-group row">
      <label className="col-md-2 control-label">Позиция</label>
      <div className="col-md-10">
        <input className="form-control" type="text" value={props.student.position} />
      </div>
    </div>
    <div className="form-group row">
      <div className="col-md-2">Формат работы</div>
      <div className="ccol-md-10">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1" defaultChecked={props.student.can_full_time}>
            Полный рабочий день
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1" defaultChecked={props.student.can_part_time}>
            Неполный рабочий день
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1" defaultChecked={props.student.can_remote}>
            Удаленно
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck1" />
          <label className="form-check-label" htmlFor="gridCheck1" defaultChecked={props.student.can_relocate}>
            Готов к переезду
          </label>
        </div>
      </div>
    </div>
    <button className="btn btn-secondary btn-md" type="submit">Сохранить изменения</button>
  </form>
);

export default StudentProfile;