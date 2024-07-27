import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                All my hardwork at one place!
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the projects that I have developed.
            </p>
            <Button gradientDuoTone='cyanToBlue' className='rounded-md transition-all duration-500 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l md:mx-10'>
                <a href="/projects" rel='noopener noreferrer'>
                    My Projects
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://static.vecteezy.com/system/resources/previews/008/858/177/non_2x/3d-isometric-scientist-analyzing-and-processing-data-statistics-with-charts-and-graph-data-visualization-concept-illustration-vector.jpg" />
        </div>
    </div>
  )
}