import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function GuestLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
}

export default GuestLayout;