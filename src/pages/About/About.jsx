
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
// j'ai créé un fichier JSON avec les données des collapses
import datasArray from "../../datas/datasArray.json"; 
 
  function About() {
	return (
		<>
			<AboutBanner />
			{datasArray.map((rule, id) => (
				<Collapse
					key={id}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
export default About