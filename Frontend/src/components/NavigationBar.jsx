import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./NavigattioBar.css"

function NavigationBar() {
    const location = useLocation();

    return (
        <nav className="bg-gray-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-2xl rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-100 hover:text-slate-900" to="/" id='FC'>FinCatalyst</Link>
                <ul className="flex space-x-6">
                    <NavItem to="/pricetracker" label="Price Tracker" currentPath={location.pathname} />
                    <NavItem to="/pricecomparison" label="Price Comparison" currentPath={location.pathname} />
                    <NavItem to="/marketcap" label="Market Cap" currentPath={location.pathname} />
                    <NavItem to="/exchangelist" label="Exchange List" currentPath={location.pathname} />
                    <NavItem to="/login" label="Login" currentPath={location.pathname} />
                    <NavItem to="/signup" label="signUp" currentPath={location.pathname} />
                </ul>
            </div>
        </nav>
    );
}

function NavItem({ to, label, currentPath }) {
    const isActive = currentPath === to;

    return (
        <div className={`rounded-lg px-3 py-2 text-slate-200 font-medium hover:bg-slate-100 ${isActive ? 'text-slate-900 bg-slate-100' : 'hover:text-slate-900'}`}>
            <Link className="navs" to={to}>
                {label}
            </Link>
        </div>
    );
}

export default NavigationBar;
