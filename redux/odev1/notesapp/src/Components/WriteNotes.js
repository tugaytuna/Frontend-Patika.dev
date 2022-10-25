import {useState} from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import {useSelector} from 'react-redux'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const colors = [{
  id: 1,
  name: 'Pink',
  avatar:
    'https://www.long-time-liner-onlineshop.com/wp-content/uploads/2018/08/Lips_Nude_Pink-1.png',
},
{
  id: 2,
  name: 'Yellow',
  avatar:
    'https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eWVsbG93fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
},
{
  id: 3,
  name: 'Red',
  avatar:
    'https://images.unsplash.com/flagged/photo-1593005510509-d05b264f1c9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwY29sb3J8ZW58MHx8MHx8&w=1000&q=80',
},
{
  id: 4,
  name: 'Gray',
  avatar:
    'https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png',
},]

function WriteNotes() {

  const [selected, setSelected] = useState(colors[3])
  const [newNoteT, setnewNoteT] = useState("")

  const notesValue = useSelector((state) => state.notes.value)

  const changeText = (e) => {
    if (e.target.name == "Writenote")
    {
      setnewNoteT(e.target.value)
    }
  }

  const addNoteClick = () => {
    //control the data is valid
    
    // add to list with redux
    
    
    console.log(newNoteT)
    setnewNoteT("");
  }

  return (
    <div>
       <input
          type="text"
          name="Writenote"
          id="Writenote"
          value={newNoteT}
          onChange={changeText}
          className="writeN block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="write your note..."
        />

    
        <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">Pick a Color</Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className=" flex items-center">
                <img src={selected.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
            
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {colors.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={person.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>          
        </>
      )}
    </Listbox>

    <button id='buttonAdd' onClick={addNoteClick} >Add Note</button>


    </div>
  )
}

export default WriteNotes