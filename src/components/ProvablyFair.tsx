import { FaSync } from 'react-icons/fa';

const ProvablyFair = () => {
    return (
        <section className="bg-secondary-dark p-6 rounded-lg flex items-center justify-between">
            <div>
                <h3 className="text-lg font-bold">Verify the fairness of every game with our transparent system</h3>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input 
                        type="text" 
                        defaultValue="a7f9d3e2b1c8..." 
                        className="bg-primary-dark border border-border-color rounded-md py-2 px-4 w-64 text-gray-300" 
                    />
                    <FaSync className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
                </div>
                <button className="bg-primary-yellow text-gray-900 font-bold py-2 px-6 rounded-md hover:bg-yellow-400 transition-colors">
                    Verify Games
                </button>
            </div>
        </section>
    );
};

export default ProvablyFair; 