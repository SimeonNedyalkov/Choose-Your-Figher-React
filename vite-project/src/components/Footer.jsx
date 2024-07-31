import { XMarkIcon } from '@heroicons/react/20/solid'
import {Link} from 'react-router-dom'
import { useAuthContext } from '../contexts/UserContext'
export default function Footer() {
  const {isAuthenticated} = useAuthContext()
  return (
  <div>
            <footer className="footer bottom-0 bg-gray-900 bg-gradient-to-r from-gray-700 to-gray-900">
                <p className='text-white'>© 2024 Choose Your Fighter.<br/> All rights reserved.</p>
                {!isAuthenticated && (
                  <div className='column'>
                    <Link
                        to="/register"
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                      >
                        Register now <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                  
                )}
                
            </footer>
    </div>
  )
}