interface IFeatureCard {
  title?: string;
  body: string;
}
function FeatureCard({ title, body }: IFeatureCard) {
  return (
    <div className="p-[1px] flex flex-col items-center justify-center bg-gradient-to-br to-orange-300/35 from-gray-50/35 rounded-2xl">
      <div className="flex flex-col items-center justify-center h-full w-full text-white bg-gradient-to-br from-neutral-700 via-neutral-800 via-35% to-black backdrop-blur-sm rounded-2xl">
        <div className="p-24 flex flex-col justify-center items-center">
          {title && (
            <h3 className="text-3xl text-left bg-gradient-to-r to-orange-100 from-orange-500 inline-block text-transparent bg-clip-text font-semibold pb-8 font-display">
              {title}
            </h3>
          )}

          <p className="text-center">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
