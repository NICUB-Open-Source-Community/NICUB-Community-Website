interface Resource {
  icon: React.ComponentType;
  heading: string;
  texts: string;
}
interface SubItemProps {
  items: Resource[];
}
const SubNav = ({ items }: SubItemProps) => {
  return (
    <div className="bg-white absolute shadow-md p-3 w-[300px] rounded-lg invisible transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:visible">
      {items.map((item, idx) => {
        return (
          <div
            className="flex items-center gap-2 hover:bg-gray-100 hover:duration-200 hover:transition p-3 rounded-lg cursor-pointer"
            key={idx}
          >
            <div className="border border-[1.5px] p-1 rounded-md">
              <item.icon />
            </div>
            <div className="leading-[1.3]">
              <h3>{item.heading}</h3>
              <p className="text-gray-500">{item.texts}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubNav;
