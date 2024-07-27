import MyProjects from '../components/MyProjects';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-7xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Projects</h1>
      <p className='text-md text-gray-500'>Showcase of all of my projects at one place.</p>
      <MyProjects />
    </div>
  )
}