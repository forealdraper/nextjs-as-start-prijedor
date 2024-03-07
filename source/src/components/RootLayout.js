import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const RootLayout = ({ children }) => {

    return (
        <>
            <Topbar />
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}

export default RootLayout;