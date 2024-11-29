import { useState } from 'react'
import { Link } from 'react-router-dom'
import Messages from './messages'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-[15%] h-[100%] border-e-2 m-2">
      <button className="p-3">
        <img className="w-28" src="./icons/Logo-Instagram.png" alt="" />
      </button>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/icons8-home-48 (1).png "
              alt=""
            />
            <p>Home</p>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/icons8-search-30.png"
              alt=""
            />
            <p>Search</p>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/icons8-explore-24.png"
              alt=""
            />
            <p>Explore</p>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img className="w-10 pr-3" src="./icons/icons8-reels-50.png" alt="" />
            <p>Reels</p>
          </button>
        </div>
      </div>
    <Link to={"./messages"}>
    <a href="Messages.html">
        <div className="pb-2">
          <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
            <button className="flex">
              <img
                className="w-10 pr-3"
                src="./icons/icons8-messenger-50.png"
                alt=""
              />
              <p>Messages</p>
            </button>
          </div>
        </div>
      </a>
    </Link>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img className="w-10 pr-3" src="./icons/icons8-heart-48.png" alt="" />
            <p>Notifications</p>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/icons8-create-24.png"
              alt=""
            />
            <p>Create</p>
          </button>
        </div>
      </div>
      <div className="pb-2">
        <div className="pt-3 pb-3 pl-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <div className="border-2 w-7 h-7 rounded-full border-gray-100">
              <img className="" src="./icons/icons8-duck-64.png" alt="" />
            </div>
            <p className="pl-2">Profile</p>
          </button>
        </div>
      </div>
      <div className="p-5" />
      <div className="p-1 hover:bg-slate-200 rounded-lg mr-3">
        <div className="p-2">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/Threads_(app)_logo.svg.png"
              alt=""
            />
            <p>Threads</p>
          </button>
        </div>
      </div>
      <div>
        <div className="p-3 hover:bg-slate-200 rounded-lg mr-3">
          <button className="flex">
            <img
              className="w-10 pr-3"
              src="./icons/icons8-menu-50 (1).png"
              alt=""
            />
            <p>More</p>
          </button>
        </div>
      </div>
    </div>
    <div className="pl-[10%] flex overflow-auto">
      <div>
        <div className="flex pt-6 text-xs text-center">
          <ul className="pr-4">
            <li>
              <div>
                <button>
                  <img
                    className="border-2 rounded-full w-16 h-16 border-orange-300"
                    src="./images/tee_tee.jpeg"
                    alt=""
                  />
                  <p>Tee_tee</p>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="pl-20 pt-8">
          <div className="flex mr-2">
            <div className="pt-1">
              <img
                className="border-2 rounded-full w-8 h-8 border-orange-300"
                src=""
                alt=""
              />
            </div>
            <div className="">
              <button className="ml-1">
                <ul className="">
                  <li className="text-sm font-bold">chrisnailsug</li>
                  <li className="text-xs font-bold mt-[-3%]">GuilioCercato</li>
                </ul>
              </button>
            </div>
            <div className="pt-2 ml-2">
              <button>
                <ul>
                  <li className="pb-1">
                    <img
                      className="w-2 pb-1"
                      src="./icons/icons8-dot-24.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      className="w-2 pb-1"
                      src="./icons/icons8-dot-24.png"
                      alt=""
                    />
                  </li>
                </ul>
              </button>
            </div>
            <div className="">
              <button className="pt-[5%]">
                <ul className="text-xs">
                  <li className="mr-9">1h</li>
                  <li className="">Beautiful</li>
                </ul>
              </button>
            </div>
            <div />
            <div className="justify-end ml-[57%] pt-2">
              <button className="">
                <img className="w-4" src="./icons/icons8-dots-48.png" alt="" />
              </button>
            </div>
          </div>
          <div className="h-full">
            <div className="border-2 rounded-lg w-ful" />
            <div className="flex pt-2">
              <div className="pr-2">
                <button>
                  <img className="w-7" src="./icons/icons8-heart-48.png" alt="" />
                </button>
              </div>
              <div className="pr-2">
                <button>
                  <img
                    className="w-7"
                    src="./icons/icons8-comment-48.png"
                    alt=""
                  />
                </button>
              </div>
              <div className="pr-5">
                <button>
                  <img className="w-7" src="./icons/icons8-send-48.png" alt="" />
                </button>
              </div>
              <div className="ml-80">
                <button>
                  <img className="w-7" src="./icons/icons8-save-32.png" alt="" />
                </button>
              </div>
            </div>
            <div className="flex text-sm font-bold">
              <div className="pr-1">
                <button>prfl</button>
              </div>
              <div>
                <button className="flex">
                  <span className="pr-1">20,001</span>
                  <p>likes</p>
                </button>
              </div>
            </div>
            <div className="flex">
              <div>
                <button className="text-sm font-bold">
                  <p>chrisnailsug</p>
                </button>
              </div>
              <div>
                <p className="fixed p-1 text-sm font-bold text-gray-950">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div>
              <button className="text-sm font-bold">See Translation</button>
            </div>
            <div>
              <button className="text-sm font-bold text-gray-600">
                View all 457 comments
              </button>
            </div>
            <div className="flex text-sm pt-2">
              <div>
                <input
                  className="outline-0"
                  placeholder="Add a comment..."
                  type="text"
                />
              </div>
              <div className="ml-72">
                <img className="w-6" src="./icons/icons8-smiley-25.png" alt="" />
              </div>
            </div>
            <div className="border-b-2 pt-4" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex ml-20 mt-8">
          <div>
            <button>
              <div className="border-2 w-12 h-12 rounded-full" />
            </button>
          </div>
          <div>
            <button>
              <ul className="text-xs pt-2">
                <li className="font-bold ml-2">albertinah</li>
                <li className="mr-3 mt-[-2%] text-gray-600">Tee_tee</li>
              </ul>
            </button>
          </div>
          <div className="text-xs pl-28 pt-2">
            <button>Switch</button>
          </div>
        </div>
        <div className="flex ml-20 pt-4 text-xs">
          <div>
            <span className="ml-1 pr-3">Suggested for you</span>
          </div>
          <div>
            <button className="ml-28">See All</button>
          </div>
        </div>
        <div className="flex ml-[26%] mt-4">
          <div>
            <button>
              <div className="border-2 w-11 h-11 rounded-full" />
            </button>
          </div>
          <div>
            <button>
              <ul className="text-xs pt-2 ">
                <li className="font-bold mr-8">simonbina</li>
                <li className="mt-[-2%] ml-1 text-gray-600">Suggested for you</li>
              </ul>
            </button>
          </div>
          <div className="text-xs ml-[28%] pt-2">
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default App
