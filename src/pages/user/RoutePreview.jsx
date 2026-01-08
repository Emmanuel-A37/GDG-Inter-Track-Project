import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useRoutes from '../../hooks/useRoutes';
import PageHeader from '../../components/common/PageHeader';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { ArrowRight, MapPin } from 'lucide-react';

const RoutePreview = () => {
    const { id } = useParams();
    const { route, loading, error, fetchRouteDetails } = useRoutes();

    useEffect(() => {
        if (id) {
            fetchRouteDetails(id);
        }
    }, [id, fetchRouteDetails]);

    return (
        <div className="min-h-screen bg-[#F6F7F8] flex flex-col">
            <PageHeader title="Route Details" showBack={true} showSave={false} />
            
            <main className="p-4 flex-1">
                {loading && (
                    <div className="flex flex-col items-center justify-center mt-20 gap-3">
                        <LoadingSpinner size={40} />
                        <p className="text-gray-500 font-medium">Loading route details...</p>
                    </div>
                )}
                
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4 text-center">
                        {error}
                    </div>
                )}

                {!loading && !error && route && (
                    <div className="space-y-6">
                        {/* Route Header */}
                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 flex-1">
                                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-green-500 w-5 h-5 flex-shrink-0" />
                                    </div>
                                    <span className="font-semibold text-gray-800">
                                        {route.start_building?.name || route.start_building}
                                    </span>
                                </div>
                                <ArrowRight className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                <div className="flex items-center gap-2 flex-1 justify-end text-right">
                                    <span className="font-semibold text-gray-800">
                                        {route.end_building?.name || route.end_building}
                                    </span>
                                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                                        <MapPin className="text-red-500 w-5 h-5 flex-shrink-0" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Steps */}
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl text-gray-900 px-1">Directions</h2>
                            
                            {route.steps && route.steps.length > 0 ? (
                                <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-gray-100">
                                    {route.steps
                                        .sort((a, b) => a.step_number - b.step_number)
                                        .map((step, index) => (
                                            <div 
                                                key={step.step_number || index} 
                                                className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative z-10 transition-all hover:shadow-md"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-200 flex items-center justify-center font-bold text-lg flex-shrink-0">
                                                        {step.step_number || index + 1}
                                                    </div>
                                                    <div className="flex-1 pt-1">
                                                        <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                                                            {step.instruction}
                                                        </p>
                                                        {step.image_url && (
                                                            <div className="mt-4 rounded-xl overflow-hidden border border-gray-100">
                                                                <img 
                                                                    src={step.image_url} 
                                                                    alt={`Step ${step.step_number || index + 1}`}
                                                                    className="w-full max-h-64 object-cover"
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ) : (
                                <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center">
                                    <p className="text-gray-500">No directions available for this route.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default RoutePreview;