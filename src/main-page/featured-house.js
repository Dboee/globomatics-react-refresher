import House from '../house/index';

const FeaturedHouseComponent = ({ house }) => {
  if (house) {
    return (
      <div>
        <div className='row featuredHouse'>
          <h3 className='col-md-12 text-center'>Featured</h3>
        </div>
        <House house={house} />
      </div>
    );
  }
  return <div>No Houses available</div>;
};

export default FeaturedHouseComponent;
