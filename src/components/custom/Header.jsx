import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout } from '@react-oauth/google';
// import { useNavigate, useNavigation } from 'react-router-dom';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  // const navigation = useNavigation();

  useEffect(()=>{
    console.log(user);
  },[])
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src="/logo.svg" alt="" />
        <div>
            {user ?
              <div className='flex items-centre gap-3'> 
                <Button variant="outline" className = "rounded-full"> My Trips</Button>

                
                <Popover>
                  <PopoverTrigger><img src = {user.picture} className='h-[25px] w-[25px] rounded-full'/></PopoverTrigger>
                  <PopoverContent>
                    <h2 onClick={()=>{
                        googleLogout();
                        localStorage.clear();
                      // navigation('\');
                      window.location.reload();
                    
                    }}>
                      Logout
                    </h2>
                  </PopoverContent>
                </Popover>
              </div>
              :
              <Button>Sign Up</Button>
            }

        </div>
    </div>
  )
}

export default Header