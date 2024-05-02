import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-gray-800 text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12"
      >
        <span className="capitalize text-red-600">Join the Movement, Fund the Future!🚀</span>
        <br />
        <span className="uppercase text-blue-500">LaunchPad</span>
      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-blue-600
        text-white font-bold text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-blue-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span className='text-white'>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span className='text-white'>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-white
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span className='text-white'>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
