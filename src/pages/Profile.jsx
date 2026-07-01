import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Profile from "../components/profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Profile />
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
