import Layout from '../components/Layout';
import HomeSection from "../components/indexPage/HomeSection";
import CoursesSection from "../components/indexPage/CoursesSection";
import TeacherSection from "../components/indexPage/TeacherSection";
import PartnersSection from "../components/indexPage/PartnersSection";
import ReviewsSection from "../components/indexPage/ReviewsSection";

const Homepage = () => (
    <Layout>
        <HomeSection/>
        <CoursesSection/>
        <TeacherSection/>
        <PartnersSection/>
        <ReviewsSection/>
    </Layout>
);

export default Homepage;

