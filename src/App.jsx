/* eslint-disable react/react-in-jsx-scope */
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import WelcomeIntro from "./pages/WelcomeIntro/WelcomeIntro";
import MyWork from "./pages/MyWork/MyWork";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact"
import { servicesSection} from "./dataContent/data"


function App() {

	return (
		<div className={`container-fluid-error`}>
			<div className={styles.App}>
				<div className={styles.mainContainer_left}>
				<Navbar></Navbar>
				</div>
				<div className={styles.mainContainer_right}>
						<WelcomeIntro></WelcomeIntro>
						<MyWork></MyWork>
					<Services servicesProps={servicesSection}></Services> 
						<Testimonials></Testimonials>
						<Contact></Contact>
			</div>
		</div>
 </div>			
	);
}

export default App;
