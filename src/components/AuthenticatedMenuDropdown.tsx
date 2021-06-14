import { Fragment } from "react";
import { DefaultSession } from "next-auth";
import { signOut } from "next-auth/client";
import { Menu, Transition } from "@headlessui/react";
import { LockOpenIcon, ChevronDownIcon } from "@heroicons/react/solid";

interface AuthenticatedMenuDropdownProps {
  session: DefaultSession
}

const AuthenticatedMenuDropdown = ({ session }: AuthenticatedMenuDropdownProps): JSX.Element => {
  return (
    <Menu>
      <Menu.Button className="flex items-center space-x-1 focus:outline-none">
        <img src={session.user?.image} height={36} width={36} className="rounded-full shadow-md" />
        <ChevronDownIcon className="w-6 h-6 text-white" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 top-11 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-green-600 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full p-2 text-sm space-x-2`}
                  onClick={() => signOut()}
                >
                  <LockOpenIcon className="w-6 h-6" />
                  <span>Log out</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AuthenticatedMenuDropdown;
