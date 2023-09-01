import logo from './logo.svg';
import './App.css';
import '../src/style/globals.css';
import AppRouter from './config/router/AppRouter';
import Layout from './components/Layouts/Layout';
import { Children } from 'react';

function App() {
  return (
    <>
    <Layout Children={<AppRouter />} />
    </>
  );
}

export default App;
