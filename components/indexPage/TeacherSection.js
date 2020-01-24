import Link from 'next/link';

const TeacherSection = () => (
    <div id="teachers" className="offset">
        <div className="fixed-background">
            <div className="row dark">
                <div className="container">
                    <div className="narrow text-center">
                        <div className="col-12">
                            <h3 className="heading">Преподаватели</h3>
                            <div className="heading-underline"> </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4 teachers">
                            <h3>Иванов Иван</h3>
                            <div className="feature">
                                <img src="uploads/teacher2.png" alt="Фотография преподавателя" />
                                    <p className="lead">Python QA</p>
                            </div>
                        </div>
                        <div className="col-md-4 teachers">
                            <h3>Федоров Федор</h3>
                            <div className="feature">
                                <img src="uploads/teacher1.png" alt="Фотография преподавателя" />
                                    <p className="lead">Python Backend</p>
                            </div>
                        </div>
                        <div className="col-md-4 teachers">
                            <h3>Олегов Олег</h3>
                            <div className="feature">
                                <img src="uploads/teacher3.png" alt="Фотография преподавателя" />
                                    <p className="lead">JavaScript developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="col-12">
                            <a className="btn btn-outline-light btn-lg" href="#">Все преподаватели</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed-wrap">
                <div className="fixed">
                </div>
            </div>
        </div>
    </div>
);

export default TeacherSection;
