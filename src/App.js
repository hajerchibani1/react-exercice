import logo from "./logo.svg";
import "./App.css";
import Profilcomponent from "./porfile/Profilcomponent";
import Imagesportif from "./porfile/Imagesportif";

function App() {
  const personne = [
    {
      im: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSqJmaHYcBZtweSXOL9wbWpsbhwVzRP3QD1aKN0PeF-uR9FkFRBthDFwsismZaT",
      nom: "Zlatin",
      biografie:
        "Zlatan Ibrahimović naît à Malmö, en Suède, le 3 octobre 1981, d'un père bosnien de confession musulmane, Šefik Ibrahimović, et d'une mère croate catholique17,18, Jurka Gravić. Son père, né à Bijeljina en Bosnie-Herzégovine, émigre en Suède en 1977 et sa mère, née dans le village de Prkos près de Škabrnja en Croatie (dans l'actuel comitat de Zadar19), émigre également en Suède où ils se rencontrent.",
      job: " joueur",
    },
    {
      im: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl37AEAsAAvZk1jX1SMfXQ8nyxBpQ2SG3yeQ&usqp=CAU",
      nom: "Cristiano Ronaldo",
      biografie:
        " né le 5 février 1985 à Funchal, est un footballeur international portugais qui évolue au poste d'attaquant à Manchester United.",
      job: "joueur",
    },
    {
      im: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/249px-Zinedine_Zidane_by_Tasnim_03.jpg",
      nom: "Zinédine Zidane",
      biografie:
        " né le 23 juin 1972 à Marseille, est un footballeur international français devenu entraîneur. Durant sa carrière de joueur, entre 1988 et 2006, il évolue au poste de milieu offensif, comme meneur de jeu. De janvier 2016 à fin mai 2018, et de mars 2019 à mai 2021, il est l'entraîneur du Real Madrid, où il a terminé sa carrière de joueur.",
      job: " joueur",
    },
    {
      im: "https://le10static.com/img/master/0000/0019/195702.jpeg",
      nom: "Lionel Messi",
      biografie:
        " parfois surnommé Leo Messi, né le 24 juin 1987 à Rosario en Argentine, est un footballeur international argentin évoluant au poste d'attaquant au Paris Saint-Germain.",
      job: "joueur",
    },
    {
      im: "https://i.pinimg.com/736x/72/98/12/72981261e1a058dffd798abf50ce7306.jpg",
      nom: "Burak Özçivit",
      biografie:
        "né le 24 décembre 1984 à Istanbul, est un acteur turc, ainsi qu'un ancien mannequin. Il est internationalement connu pour son rôle dans Kara Sevda (2015-2017), l'une des séries turques les plus réussies, vendue dans plus de 110 pays et le seul lauréat de l'international Emmy Award en 20171.",
      job: " acteur",
    },
    {
      im: "https://www.celebritiesfrom.com/wp-content/uploads/2018/04/murat-yildirim.jpg",
      nom: "Murat Yildirim",
      biografie:
        "Il a un diplôme d'ingénieur industriel de l'École Technique Yildiz à Istanbul. Très tôt, il s'intéressa à la musique et au théâtre, ce qui l'a amené à s'inscrire au département d'art dramatique en secondaire. Lorsqu'il était adolescent, Murat joua de la batterie dans un groupe. Il est aussi très connu dans le monde arabe pour son rôle de Demir dans la série culte Asi avec Tuba Büyüküstün.",
      job: "acteur",
    },
  ];
  const handleName = (msg) => alert(msg);
  return (
    <div>
      <div className="App">
        {personne.map((el) => (
          <Profilcomponent
            ima={el.im}
            fullname={el.nom}
            bio={el.biografie}
            profession={el.job}
            handleName={handleName}
          ></Profilcomponent>
        ))}
      </div>
      <div className="list">
        <img src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSqJmaHYcBZtweSXOL9wbWpsbhwVzRP3QD1aKN0PeF-uR9FkFRBthDFwsismZaT"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl37AEAsAAvZk1jX1SMfXQ8nyxBpQ2SG3yeQ&usqp=CAU"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/249px-Zinedine_Zidane_by_Tasnim_03.jpg"></img>
        <img src="https://le10static.com/img/master/0000/0019/195702.jpeg"></img>
        <img src="https://i.pinimg.com/736x/72/98/12/72981261e1a058dffd798abf50ce7306.jpg"></img>
        <img src="https://www.celebritiesfrom.com/wp-content/uploads/2018/04/murat-yildirim.jpg"></img>
      </div>
    </div>
  );
}

export default App;
