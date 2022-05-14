import React from 'react'
import './App.scss';
import FormPage from './components/FormPage';
import TablePage from './components/TablePage';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

function App() {

  const [page, setPage] = React.useState("formpage")

  return (
    <div className="App">
      <Header setPage={setPage} />

      {page === "formpage" && <FormPage />}

      {page === "tablepage" && <TablePage />}

      <ToastContainer />

    </div>
  );
}

export default App;
