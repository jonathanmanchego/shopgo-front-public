import tools from '../../../assets/images/tools.jpeg';

function WallpaperEnterprise() {
  return (
    <div className="max-h-auto " style={
      {
        backgroundImage: `url(${tools})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '24rem',
        width: '100%',
      }
    }>
    </div>
  );
}

export default WallpaperEnterprise;