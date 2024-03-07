import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const RootLayout = ({ children }) => {

    return (
        <>
            <header>
                <Topbar />
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            <BackToTop />
        </>
    );
}

export default RootLayout;