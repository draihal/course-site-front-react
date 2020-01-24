import Link from 'next/link';

const ReviewsSection = () => (
    <div id="reviews" className="offset">
        <div className="jumbotron">
            <div className="container">
                <div className="col-12 text-center">
                    <h3 className="heading">Отзывы</h3>
                    <div className="heading-underline"> </div>
                </div>
                <div className="row">
                    <div className="col-md-6 reviews">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="uploads/user1.png" alt="Фотогрфия студента" />
                            </div>
                            <div className="col-md-8">
                                <blockquote>
                                    <i className="fas fa-quote-left"> </i>
                                    <i>Давно выяснено, что при оценке дизайна и композиции читаемый
                                        текст мешает сосредоточиться. Lorem Ipsum используют потому,
                                        что тот обеспечивает более или менее стандартное заполнение шаблона</i>
                                    <hr className="reviews-hr" />
                                        <cite>&#8212; Эрик, IOS разработчик</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 reviews">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="uploads/user2.png" alt="Фотогрфия студента" />
                            </div>
                            <div className="col-md-8">
                                <blockquote>
                                    <i className="fas fa-quote-left"> </i>
                                    <i>Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной
                                        вёрстки и редакторы HTML используют Lorem Ipsum в качестве
                                        текста по умолчанию, так что поиск по ключевым словам</i>
                                    <hr className="reviews-hr" />
                                        <cite>&#8212; Эдик, Java разработчик</cite>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 narrow text-center">
            <p className="lead">Хочешь узнать больше мнений?</p>
            <a className="btn btn-secondary btn-md" href="#">Другие отзывы</a>
        </div>
    </div>
);

export default ReviewsSection;
