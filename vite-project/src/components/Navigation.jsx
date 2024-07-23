import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Events', href: '/events', current: false },
  { name:'Create Champion', href:'/createChampion',current:false},
  { name: 'Champions', href: '/champions', current: false },
  { name:'Weapons', href:'/weapons',current:false},
  { name:'Armors', href:'/armors',current:false},
  {name:'Select Fighter',href:'/selectFighter',current:false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation(){
    const [newNavigation, setNewNavigation] = useState(navigation);
    const [isNotLogedIn,setIsLogedIn] = useState(false)
    
    const handleNavClick = (clickedItem) => {
      setNewNavigation((prevNavigation) =>
        prevNavigation.map((item) =>
          item.name === clickedItem.name
            ? { ...item, current: true }
            : { ...item, current: false }
        )
      );
    };

    const isUserLogedIn = () =>{
      setIsLogedIn(true)
    }
    return (
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="./images/18plus.png"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {newNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
  
              {/* Profile dropdown */}
              {isNotLogedIn && (
                <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="../../images/neutral-user/R.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <MenuItem>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/logout"  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Sign out
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
              )}
              {!isNotLogedIn && (
                <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="../../images/neutral-user/1206832.jpg"
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <MenuItem>
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Login
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Register
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
              )}
              
            </div>
          </div>
        </div>
  
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    )
  }