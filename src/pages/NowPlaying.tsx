import { FiHeart, FiPlayCircle } from "react-icons/fi";
import { BsArrowRepeat, BsPlay } from "react-icons/bs";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import { FaRandom } from "react-icons/fa";

import DefaultBackgroundImage from "../../images/ed1.jpeg";

interface NowPlayingProps {

}

const NowPlaying : React.FC = () => {
    return (
        <div className="flex h-full">
            <div
              style={{ backgroundImage: `url('${DefaultBackgroundImage}')` }}
              className="md:w-80 w-0 h-full bg-cover flex flex-col justify-end bg-center"
            >
              <div
                className="bg-white flex bg-opacity-25 h-32 backdrop-blur-lg fixed bottom-0 right-0"
                style={{ width: "calc(100% - 70px)" }}
              >
                <div className="w-80 hidden md:block">
                  <div className="w-14 flex text-white justify-center items-center h-14 transform -translate-y-7 translate-x-5 bg-cyan-400 rounded-full">
                    <FiPlayCircle size={24} />
                  </div>
                  <div className="px-5 text-white text-xs">NOW PLAYING</div>
                  <div className="flex">
                    <div className="flex-grow text-white px-5">
                      Shape of you - Ed Sheeran
                    </div>
                  </div>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center">
                  <div className="flex">
                    <div className="p-3">
                      <FaRandom />
                    </div>
                    <div className="p-3">
                      <GrChapterPrevious />
                    </div>
                    <div className="text-white w-10 h-10 rounded-full flex justify-center items-center bg-black">
                      <BsPlay size={20} />
                    </div>
                    <div className="p-3">
                      <GrChapterNext />
                    </div>
                    <div className="p-3">
                      <BsArrowRepeat />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-500 tracking-widest">02:30</div>
                    <div>
                      <div className="h-1 w-96 bg-gray-400">
                        <div className="w-10 bg-cyan-400 h-full"></div>
                      </div>
                    </div>
                    <div className="text-gray-500 tracking-widest">04:30</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow overflow-auto">
              <div className="px-5 py-20 bg-cyan-50">
                <div className="font-bold text-gray-500 tracking-widest">
                  ALBUM
                </div>
                <div className="text-5xl w-4/5 mt-5">
                  Shape of you by Ed Sheeran and Marshley
                </div>
              </div>
              <div>
                <div className="p-5 text-gray-500 tracking-widest">
                  OTHER ALBUMS BY ED SHEERAN
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
                <div className="flex items-center px-5 hover:bg-cyan-100">
                  <div className="text-white w-10 h-10 bg-cyan-400 rounded-full flex justify-center items-center">
                    <FiPlayCircle />
                  </div>
                  <div className="flex-grow">
                    <div className="px-5 py-3 ">
                      <div className="font-bold">
                        Ed sheeran - Shape of you by EdSheeran and marshley
                      </div>
                      <div className="text-xs">Lorem ipsum dolor sit amet.</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3">
                      <FiHeart />
                    </div>
                    <div className="p-3 text-gray-500 tracking-widest">
                      4:15
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default NowPlaying