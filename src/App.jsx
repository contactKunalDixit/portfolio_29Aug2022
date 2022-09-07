/* eslint-disable react/react-in-jsx-scope */
import styles from "./App.module.css"
import Navbar from './components/Navbar/Navbar';
import WelcomeIntro from "./pages/WelcomeIntro/WelcomeIntro";
import MyWork from "./pages/MyWork/MyWork";
import Services from "./pages/Services/Services";
import Testimonials from "./pages/Testimonials/Testimonials";
import Contact from "./pages/Contact/Contact"
import data from "./dataContent/data"


function App() {
	// let data = {
	// 	servicesData: [
	// 		{
	// 			title: "Kunal",
	// 			desc: "wfwdf"
	// 		}
	// 	]
	// }
	return (
		<div className={`container-fluid-error`}>
			<div className={styles.App}>
				<div className={styles.mainContainer_left}>
				<Navbar></Navbar>
				</div>
				<div className={styles.mainContainer_right}>
						<WelcomeIntro></WelcomeIntro>
						<MyWork></MyWork>
					<Services
						servicesProps={data.servicesData}
					></Services>
						<Testimonials></Testimonials>
						<Contact></Contact>
			</div>
		</div>
 </div>			
	);
}

export default App;
