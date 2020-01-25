import Layout from '../components/Layout';
import HomeSection from "../components/indexPage/HomeSection";
import CoursesSection from "../components/indexPage/CoursesSection";
import TeacherSection from "../components/indexPage/TeacherSection";
import PartnersSection from "../components/indexPage/PartnersSection";
import ReviewsSection from "../components/indexPage/ReviewsSection";
import fetch from 'isomorphic-unfetch';

const Homepage = props => (
    <Layout>
        <HomeSection
            title={props.indexPage.title}
            short_description={props.indexPage.short_description} />
        <CoursesSection
            description={props.indexPage.description}
            number_of_students={props.indexPage.number_of_students}
            number_of_groups={props.indexPage.number_of_groups}
            number_of_teachers={props.indexPage.number_of_teachers} />
        <TeacherSection teachers={props.indexPage.random_three_teachers} />
        {/*<PartnersSection/>*/}
        <ReviewsSection reviews={props.indexPage.random_two_reviews}/>
    </Layout>
);

Homepage.getInitialProps = async function() {
    const res = await fetch(`${process.env.basePath}/api/v1/pages/index/`);
    const indexPage = await res.json();
    return { indexPage };
};

export default Homepage;

