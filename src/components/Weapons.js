const Weapons = ({ weaponData }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {weaponData &&
        weaponData.map((item) => (
          <div className='col' key={item.uuid}>
            <div className='card h-100 '>
              <img src={item.displayIcon} className='card-img-top ' alt='...' />
              <div className='card-body'>
                <p className='card-text  '></p>
              </div>
              <div className='card-footer'>
                <strong className='text-muted'>{item.displayName}</strong>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Weapons;
