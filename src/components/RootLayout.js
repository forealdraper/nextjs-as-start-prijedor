import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import Viber from './Viber';

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
            <Viber />
            <BackToTop />
        </>
    );
}

export default RootLayout;