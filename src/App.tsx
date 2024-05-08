import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, MouseEvent, useEffect, useState } from 'react'
import './App.css'

import data from './data/data.json'
import { Categories, Description, Material, type Bijoutier } from './domain/models/bijoutier'
import { formatCurrency } from './utils/formatCurrency'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { value: Categories.CHAINS, name: 'CADENAS', href: '#' },
  { value: Categories.HOOPS, name: 'AROS', href: '#' },
  { value: Categories.EARRINGS, name: 'PENDIENTES', href: '#' },
  { value: Categories.EARCUFF, name: 'OREJERA', href: '#' },
  { value: Categories.MOLES, name: 'TOPOS', href: '#' },
  { value: Categories.BRACELET, name: 'PULSERA', href: '#' },
  { value: Categories.RING, name: 'ANILLO', href: '#' },
  { value: Categories.SETS, name: 'CONJUNTOS', href: '#' },
  { value: Categories.Empty, name: 'OTROS', href: '#' },
]
const filters = [
  {
    id: 'material',
    name: 'Material',
    options: [
      { value: Material.ACERO.toLowerCase(), label: Material.ACERO, checked: false },
      { value: Material.BARBARISKA.toLowerCase(), label: Material.BARBARISKA, checked: false },
      { value: Material.COVERGOLD.toLowerCase(), label: Material.COVERGOLD, checked: true },
      { value: Material.DOBLE_ACERO.toLowerCase(), label: Material.DOBLE_ACERO, checked: false },
      { value: Material.PANDORA_ACERO.toLowerCase(), label: Material.PANDORA_ACERO, checked: false },
      { value: Material.MOSTACILLA_BRONCE.toLowerCase(), label: Material.MOSTACILLA_BRONCE, checked: false },
      { value: Material.RODIO.toLowerCase(), label: Material.RODIO, checked: false },
      { value: Material.Empty.toLowerCase(), label: Material.Empty, checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals!!!', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [earrings, setEarrings] = useState<Bijoutier[]>([])
  const [categorieSelected, setCategorieSelected] = useState('')

  useEffect(() => {
    getProductByCategorie(Categories.SETS)
  }, [])

  const getProductByCategorie = (categorie: Categories, event?: MouseEvent) => {
    event?.preventDefault();
    if (categorieSelected === categorie) return;
    const result: Bijoutier[] = data.filter((product) => product.categorie === categorie)
    setCategorieSelected(categorie)
    console.log(result)
    setEarrings(result)
  }

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Los regalos perfectos para mamá han llegado!
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Este año, nuestra nueva colección para el Día de la Madre te abrazará con cariño y te protegerá de las adversidades de un mundo que no siempre reconoce el sacrificio y amor de una madre.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441508771_10232072205528777_5092442725541928808_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=P7Ukl_HmLBwQ7kNvgFY13Ts&_nc_ht=scontent-bog2-2.xx&oh=00_AfDjQ1l5jJv_mcSS1i6SnpXw5cKHDHzIZ4THz5JRJRycIQ&oe=6640A921"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441533634_10232072207728832_326386502398520654_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bcmqVvovchUQ7kNvgG_LED6&_nc_ht=scontent-bog2-2.xx&oh=00_AfAyA_fzh7CoA1SCS8ObWfhISOG4zUjvJx-qTCOBuoEE1Q&oe=664091DC"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441540898_10232072221529177_6046282908847624938_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dmO1HySEbWwQ7kNvgG09eDo&_nc_ht=scontent-bog2-2.xx&oh=00_AfBMSQ8reQTYxdnTbKYJsv6SE_BOOk70aK987SFeOnENiw&oe=66409DF4"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441465908_10232072214609004_6616316587468886578_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PoSx3mbpENMQ7kNvgE2BbBi&_nc_ht=scontent-bog2-2.xx&oh=00_AfA0jDE4u1-SP-XSXYvTzo5RU_mivwARmf9UDEe-TRCtBA&oe=6640A92E"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441955123_10232072210728907_2536369375669004183_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=efMQa50Fn5MQ7kNvgGbgm4R&_nc_ht=scontent-bog2-2.xx&oh=00_AfBBm-Ln5hWmafCSLS2zA5hmm53eQh7iiSyGpJY5iRRYTg&oe=6640838B"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/441461828_10232072214408999_1834056338188230745_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9yjReiO0pMoQ7kNvgHRO_p6&_nc_ht=scontent-bog2-2.xx&oh=00_AfDwctYdGdbNOaLJIy_q11vx9CNLH5hS_nOAWCCeQrjx-w&oe=6640AAC3"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://scontent-bog2-2.xx.fbcdn.net/v/t39.30808-6/442384529_10232072208688856_8869160302699158053_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BbuaQA9YY7gQ7kNvgHorRCZ&_nc_ht=scontent-bog2-2.xx&oh=00_AfBI0BY0xKUl8Fv3qnrRodEP4eYeYLN8A2HGbjHjbw4Jkw&oe=6640B378"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} onClick={(event) => getProductByCategorie(category.value, event)} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Nuevo!</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                {/* <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div> */}

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button> */}
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filtros</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} onClick={(event) => getProductByCategorie(category.value, event)}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Your content */}
                <div className="bg-white">
                  <div className='mmx-auto'>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                      {earrings && earrings.map((earring) => {
                        return (
                          <a href="#" className="group" key={earring.id}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                              <img className="h-full w-full object-cover object-center group-hover:opacity-75" src={earring.imageURL} alt={earring.title} />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-800 font-bold">{earring.title}</h3>
                            <h3 className="text-sm text-gray-700">REF: {earring.id}</h3>
                            {earring.description !== Description.Empty && <h3 className="mt-2 text-sm text-gray-700">{earring.description}</h3>}
                            <p className="mt-2 text-sm font-light text-gray-400 line-through">{formatCurrency(earring.price + 2000)}</p>
                            <p className="text-lg font-medium text-gray-900">{formatCurrency(earring.price)}</p>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

  )
}

export default App
