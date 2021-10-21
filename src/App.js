import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import "./App.css";
import Accueil from "./pages/accueil";
import Footer from "./components/footer";
import ViandeTofu from "./pages/viandeTofu";
import SaladeTomateOignon from "./pages/saladeTomateOignon";
import Sauces from "./pages/sauces";
import Recap from "./pages/recap";
import Payment from "./pages/payment";
import CommandValide from "./pages/commandValide";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/viandeTofu" component={ViandeTofu} />
        <Route path="/saladeTomateOignon" component={SaladeTomateOignon} />
        <Route path="/sauces" component={Sauces} />
        <Route path="/recap" component={Recap} />
        <Route path="/payment" component={Payment} />
        <Route path="/validerCommande" component={CommandValide} />
        <Route exact path="/" component={Accueil} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
