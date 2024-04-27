const LineStat = ({ name, data, color }: any) => {
    const calculatePercentage = (count: any) => (count / 100) * 100;
    return (
        <div className="w-full">
            <span className="mb-4 text-sm capitalize">{name}</span>
            <div className="relative">
                <div className="w-full bg-gray-200 rounded-sm h-[10px]">
                    <div
                        className={`bg-${color} h-full rounded-sm  capitalize`}
                        style={{
                            width: `${calculatePercentage(data)}%`,
                            backgroundColor: `${color}`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default LineStat;
