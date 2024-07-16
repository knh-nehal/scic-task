import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
            <Link to="/">
              <div className="flex items-center gap-1">
                <img className="size-10" src="./icon-big.png" alt="" />
                <h2 className="text-3xl font-semibold">SwiftPay</h2>
              </div>
            </Link>
          </div>

          <div className="w-full flex items-center justify-end ms-auto lg:justify-between gap-x-2 sm:gap-x-3 sm:order-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">
                Welcome Back, Nehal
              </h2>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
                    <p className="text-sm text-gray-500">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800">
                      james@site.com
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                      href="#"
                    >
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex justify-between items-center py-2">
          <ol className="ms-3 flex items-center whitespace-nowrap">
            <li
              className="text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Dashboard
            </li>
          </ol>

          <button
            type="button"
            className="py-2 px-3 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Sidebar"
          >
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13" />
            </svg>
            <span className="sr-only">Sidebar</span>
          </button>
        </div>
      </div>

      <div
        id="application-sidebar"
        className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px]
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 
 "
      >
        <div className="px-8 pt-4">
          <Link to="/">
            <div className="flex items-center gap-1">
              <img className="size-10" src="./icon-big.png" alt="" />
              <h2 className="text-3xl font-semibold">SwiftPay</h2>
            </div>
          </Link>
        </div>

        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                to="/"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                to="/send-money"
              >
                Send Money
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                to="/cash-in"
              >
                Cash In
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                to="/cash-out"
              >
                Cash Out
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-neutral-700 rounded-lg hover:bg-gray-100"
                to="/history"
              >
                Transaction History
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-x-2">
                  <p className="text-xs uppercase tracking-wide text-gray-500">
                    Balance
                  </p>
                </div>

                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
                    40 Tk
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
