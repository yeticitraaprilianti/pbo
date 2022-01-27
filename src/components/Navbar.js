function Navbar() {
    return (
        <div className="navbar bg-yellow-600">
        <div className="container flex mx-auto items-center">
          <div className="w-3/12">
            <div className="logo text-white text-2xl text-center uppercase font-semibold ">Yecacitra</div>
          </div>
          <div className="w-6/12">
            <div className="nav text-center">
              <ul className="nav-item  flex justify-center space-x-10 py-16 ">
                <li>
                  <a className='text-white text-opacity-60 font-semibold'>Profile</a>
                </li>
                <li>
                  <a className='text-white text-opacity-60 font-semibold'>Skills</a>
                </li>
                <li>
                  <a className='text-white text-opacity-60 font-semibold'>Project</a>
                </li>
                <li>
                  <a className='text-white text-opacity-60 font-semibold'>Contact</a>
                </li>
                
              </ul>
            </div>
          </div>
          <div className="w-3/12">
            <div className="button text-center">
              <a className='text-white font-semibold text-white-300 border border-yellow-300 rounded-full px-6 py-2'>Contact</a>
            </div>
          </div>
          </div>
      </div>          
    );
}

export default Navbar;