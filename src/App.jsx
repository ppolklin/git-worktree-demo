import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import NewsSection from './components/NewsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <NewsSection />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;
