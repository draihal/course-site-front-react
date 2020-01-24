import Link from 'next/link';

const CoursesSection = () => (
    <div id="courses" className="offset">
        <div className="container">
            <div className="col-12 narrow text-center">
                <h1>Курсы</h1>
                <p className="lead">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                    Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
                    В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                    используя Lorem Ipsum для распечатки образцов.</p>
                <Link href="/"><a className="btn btn-secondary btn-md">Выбрать</a></Link>
            </div></div>
        {/* <!--- Start Jumbotron --> */}
        <div id="features">
            <div className="jumbotron">
                <div className="container">
                    <div className="narrow text-center">
                        <div className="col-12">
                            <h3 className="heading">Наша статистика</h3>
                            <div className="heading-underline"> </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fas fa-user-graduate fa-4x" data-fa-transform="shrink-3 up-5" />
                                    <h3>999 студентов</h3>
                                    <p>Прошли обучение почти 1000 человек!</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fas fa-users fa-4x" data-fa-transform="shrink-3 up-5" />
                                    <h3>99 Групп</h3>
                                    <p>Прошли обучение почти 100 групп!</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fas fa-user-friends fa-4x" data-fa-transform="shrink-3 up-5" />
                                    <h3>33 преподавателя</h3>
                                    <p>Лучшие в своей области!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!--- End Jumbotron --> */}
    </div>
);

export default CoursesSection;