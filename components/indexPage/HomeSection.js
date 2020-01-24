import Link from 'next/link';

const HomeSection = () => (
    <div id="home">
        {/* <!-- Start Landing Page Section --> */}
        <div className="landing">
            <div className="home-wrap">
                <div className="home-inner">
                </div>
            </div>
        </div>
        <div className="caption text-center">
            <div className="container">
                <h1>Онлайн курсы</h1>
                <h3>Онлайн образование для всех</h3>
                <Link href="/">
                    <a className="btn btn-outline-light btn-lg">Выбрать</a>
                </Link>
            </div>
        </div>
        {/* <!-- End Landing Page Section --> */}
    </div>
);

export default HomeSection;
