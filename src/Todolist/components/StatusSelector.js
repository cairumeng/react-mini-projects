import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
const STATUSES = ['Uncompleted', 'Completed', 'All']

const StatusSelector = ({ selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Button className="w-full h-full relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
            <span className="flex items-center">
              <span className="ml-3 block truncate">{STATUSES[selected]}</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-10 mt-1  bg-white shadow-lg max-h-56 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {STATUSES.map((status, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    classNames('cursor-default select-none relative py-2 pl-3 pr-9', {
                      'text-white bg-purple-600 ': active,
                      'text-gray-900': !active,
                    })
                  }
                  value={index}
                >
                  {status}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}
export default StatusSelector
