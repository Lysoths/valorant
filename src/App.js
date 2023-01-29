import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Characters from "./components/Characters";
import Map from "./components/Map";
import Weapons from "./components/Weapons";
import Home from "./components/Home";
import CharacterDetails from "./components/CharacterDetails";

const App = () => {
  const [data, setData] = useState();
  const [mapData, setMapData] = useState();
  const [weaponData, setWeaponData] = useState();
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?language=tr-TR")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps?language=tr-TR")
      .then((response) => response.json())
      .then((data) => setMapData(data.data));
  }, []);
  useEffect(() => {
    fetch("https://valorant-api.com/v1/weapons?language=tr-TR")
      .then((response) => response.json())
      .then((data) => setWeaponData(data.data));
  }, []);

  const newData =
    data && data.filter((item) => item.isPlayableCharacter !== false);
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg bg-danger  rounded mb-3'>
        <div className='container-fluid '>
          <button
            className='navbar-toggler text-white'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon '></span>
          </button>
          <div className='collapse navbar-collapse ' id='navbarNav'>
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/'>
                  Anasayfa
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/karakterler'>
                  Karakterler
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/silahlar'>
                  Silahlar
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to='/haritalar'>
                  Haritalar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/karakterler' element={<Characters newData={newData} />} />
        <Route path='/silahlar' element={<Weapons weaponData={weaponData} />} />
        <Route path='/haritalar' element={<Map mapData={mapData} />} />
        <Route
          path='/detay/:karakter'
          element={<CharacterDetails newData={newData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
