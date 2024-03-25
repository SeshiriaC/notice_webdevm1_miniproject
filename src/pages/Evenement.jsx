import Menu from "../component/Menu";
import EventCard from "../component/EventCard";
import PageFooter from "../component/PageFooter";
import vr1Print from "../images/vr1.png";

function Evenement() {
  const vr1Paragraph =
    <>
      <h1>Vivez l'extase virtuelle !</h1>
      <p>
        La réalité virtuelle débarque dans votre ville et s'apprête à la
        bouleverser !
      </p>
      <h2>Rejoignez-nous le [Date] pour une soirée cosmique :</h2>
      <p>En route pour le voyage immersif de votre vie !</p>
      <h3>Programme interstellaire :</h3>
      <ul>
        <li>
          18h00 - 18h30 : Accrochez vos casques et préparez-vous à décoller !
        </li>
        <li>18h30 - 19h30 : Conférence :</li>
        <ul>
          <li>La réalité virtuelle : Bienvenue dans l'hyperespace !</li>
          <li>
            Défis et opportunités de la VR : Explorez l'infini et au-delà !
          </li>
          <li>VR : Les applications qui vont révolutionner votre monde !</li>
        </ul>
        <li>19h30 - 20h00 : Pause ravitaillement galactique !</li>
        <li>20h00 - 21h00 : Table ronde :</li>
        <ul>
          <li>
            VR et l'éducation : Apprendre en s'envolant vers de nouveaux
            horizons !
          </li>
          <li>VR et la santé : Soigner et guérir autrement</li>
          <li>VR et l'art : Créer des émotions à couper le souffle</li>
        </ul>
        <li>21h00 - 21h30 : Questions-réponses et atterrissage en douceur.</li>
      </ul>
      <h3>Votre équipage d'experts :</h3>
      <ul>
        <li>[Invitez un expert en réalité virtuelle]</li>
        <li>[Invitez un représentant d'une entreprise utilisant la VR]</li>
        <li>[Invitez un acteur du monde de l'éducation ou de la santé]</li>
      </ul>
      <h3>Pour qui ?</h3>
      <ul>
        <li>Tous les explorateurs de l'imaginaire</li>
        <li>Étudiants : Préparez-vous au futur !</li>
        <li>Professionnels : Innovez avec la VR !</li>
        <li>Passionnés de technologie : Découvrez les dernières innovations</li>
        <li>Grand public : La VR vous concerne !</li>
      </ul>
      <h2>Téléportez-vous dès maintenant !</h2>
      <p>Gratuit</p>
    </>;

  return (
    <div>
      <Menu></Menu>
      <EventCard
        header="Vision 2.0"
        print={vr1Print}
        paragraph={vr1Paragraph}
      ></EventCard>
      <h1>EVENT</h1>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Evenement;
