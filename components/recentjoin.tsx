
const people = Array(50).fill(
  {
    name: 'Leslie Alexander',
    envited: '@airdrops_io',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });

export default function RecentJoin () {
  
  return (
    <div className="pb-4 lg:pb-12 w-full lg:min-w-[300px]" data-aos="fade-up" data-aos-delay="500">
      <div className="flex flex-row items-end justify-between my-4 lg:my-8">
        <h1 className="text-2xl text-primary font-bold leading-tight tracking-normal">Recent Joins</h1>
      </div>
      <div className="w-full h-[1px] bg-gray-500"></div>
      <div className="overflow-auto w-full lg:h-[70vh] scrollbar-hide">
        <ul className="lg:divide-y divide-gray-800 flex flex-row lg:block">
          {people.map((person, id) => (
            <li key={id} className="shrink-0">
              <div className="flex items-center gap-4 py-2 px-2">
                <img className="h-12 w-12 flex-none rounded-full border-2 border-text border-opacity-30" src={person.imageUrl} alt="" />
                <div className="hidden lg:flex lg:flex-col lg:items-start lg:gap-1">
                  <div className="flex items-center justify-between gap-2 w-fit">
                    <p className="text-lg text-primary font-semibold max-w-[120px] whitespace-nowrap overflow-hidden text-ellipsis">{person.name}</p>
                    <p className="text-md text-secondary font-semibold whitespace-nowrap">{person.time}</p>
                  </div>
                  <p className="text-start text-md text-secondary font-semibold whitespace-nowrap">Invited by {person.envited}</p>
                </div>
                <div>

                <div className="flex flex-col items-start lg:hidden"> 
                    <p className="text-lg text-primary font-semibold whitespace-nowrap">{person.name}</p>
                    <p className="text-md text-secondary font-semibold whitespace-nowrap">{person.time}</p>
                    <p className="text-start text-md text-secondary font-semibold whitespace-nowrap">Invited by {person.envited}</p>
                </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}