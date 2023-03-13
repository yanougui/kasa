//impooter les components
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { Link } from "react-router-dom";
import axios from "axios";
  function Home() {
	const [data, setData] = useState([]);
	useEffect(() => {
		//requète AXIOS ici également pour prochaine utilisation API
		axios.get("/logements.json").then((res) => setData(res.data));  
	}, []);
	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
export default Home