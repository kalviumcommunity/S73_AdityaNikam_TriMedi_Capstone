import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const features = [
  {
    icon: 'bx-capsule',
    title: 'Online Pharmacy',
    text: 'Browse and purchase prescription medicines.'
  },
  {
    icon: 'bx-plus-medical',
    title: 'Health Essentials',
    text: 'Find wellness products, supplements, and devices.'
  },
  {
    icon: 'bx-brain',
    title: 'Smart Suggestions',
    text: 'Get personalized recommendations from your history.'
  },
  {
    icon: 'bx-user-voice',
    title: 'Doctor Consultation',
    text: 'Connect with certified doctors from home.'
  },
  {
    icon: 'bx-package',
    title: 'Order Tracking',
    text: 'Follow every order from purchase to delivery.'
  },
  {
    icon: 'bx-bell',
    title: 'Medicine Reminders',
    text: 'Stay on schedule with refill and dose reminders.'
  }
];

const HomePage = () => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('trimediUser');
  const token = localStorage.getItem('trimediToken');
  const user = useMemo(() => {
    if (!storedUser) return null;

    try {
      return JSON.parse(storedUser);
    } catch {
      return null;
    }
  }, [storedUser]);
  const isLoggedIn = Boolean(token && user);
  const profileInitial = user?.name?.[0] || user?.username?.[0] || 'U';

  const handleLogout = () => {
    localStorage.removeItem('trimediToken');
    localStorage.removeItem('trimediUser');
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="TriMedi Logo" className="h-12 w-12 rounded-full object-contain" />
            <span className="text-2xl font-bold text-red-700">TriMedi</span>
          </Link>

          <div className="flex items-center gap-5 text-gray-900">
            <a href="#cart" className="flex h-14 w-16 flex-col items-center justify-center rounded-md text-sm font-semibold hover:bg-red-50 hover:text-red-600">
              <i className="bx bx-cart text-3xl leading-none"></i>
              <span>Cart</span>
            </a>

            {isLoggedIn ? (
              <div className="flex items-center gap-4 border-l border-gray-200 pl-5">
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-lg font-bold uppercase text-white">
                  {profileInitial}
                </button>
                <div className="hidden text-left sm:block">
                  <p className="text-base font-bold leading-5 text-gray-950">{user.name || user.username}</p>
                  <button className="mt-1 text-sm font-bold text-red-600 hover:underline">View Profile</button>
                </div>
                <button
                  onClick={handleLogout}
                  className="rounded-md border border-red-600 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-600 hover:text-white"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="rounded-md bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      <main className="relative">
        {!isLoggedIn && (
          <div className="fixed inset-x-0 top-20 z-20 mx-auto w-fit rounded-md border border-red-200 bg-white px-6 py-4 text-center shadow-xl">
            <p className="mb-3 text-lg font-bold text-red-700">Login to enter TriMedi</p>
            <Link
              to="/auth"
              className="inline-flex rounded-md bg-red-600 px-6 py-2 font-semibold text-white hover:bg-red-700"
            >
              Login
            </Link>
          </div>
        )}

        <div className={`${isLoggedIn ? '' : 'pointer-events-none select-none blur-sm'} transition duration-300`}>
          <section className="mx-auto flex min-h-[calc(100vh-82px)] max-w-6xl flex-col justify-center px-4 py-16">
            <div className="max-w-3xl">
              <p className="mb-3 text-lg font-semibold text-red-600">Healthcare made simple</p>
              <h1 className="mb-5 text-5xl font-extrabold leading-tight text-gray-950 md:text-6xl">
                Medicines, care, and support in one place.
              </h1>
              <p className="mb-8 max-w-2xl text-xl text-gray-600">
                Order medicines, discover health essentials, consult doctors, and track everything from home.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#cart" className="rounded-md bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
                  Open Cart
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="mb-8 text-3xl font-bold text-gray-950">What you can do</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                  <i className={`bx ${feature.icon} mb-4 text-4xl text-red-600`}></i>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="cart" className="bg-gray-950 px-4 py-12 text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-red-300">Cart</p>
                <h2 className="mt-2 text-3xl font-bold">Your healthcare cart is ready.</h2>
              </div>
              <button className="w-fit rounded-md bg-white px-6 py-3 font-semibold text-gray-950 hover:bg-red-100">
                Open Cart
              </button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default HomePage;
