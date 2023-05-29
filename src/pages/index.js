import styles from "../assets/styling/style";
import { Billing,Button, Business, CardDeal, Client, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../components";

const App = () => (
  <div className="bg-pri w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-pri ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-pri ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Client/>
        <CTA/>
        <Footer/>
     </div>
    </div>
  </div>
);

export default App;
