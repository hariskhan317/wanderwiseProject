import React from 'react';

function Header({ setCoordinates }) { 

    return (
        <div className='flex justify-between w-full bg-blue-500 h-14 py-4 px-10'>
            <div>WANDER WISE</div>
            <div> Search bar</div>
        </div>
    );
}

export default Header;