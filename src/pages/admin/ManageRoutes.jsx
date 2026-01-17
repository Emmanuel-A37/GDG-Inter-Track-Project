import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRoutes from '../../hooks/useRoutes';
import PageHeader from '../../components/common/PageHeader';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { ArrowRight, Trash2, Edit } from 'lucide-react';

const ManageRoutes = () => {
    const navigate = useNavigate();
    const { routes, loading, error, fetchRoutes, deleteRoute } = useRoutes();
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [actionLoading, setActionLoading] = useState(false);

    useEffect(() => {
        fetchRoutes();
    }, [fetchRoutes]);

    const handleDelete = async (routeId) => {
        setActionLoading(true);
        try {
            await deleteRoute(routeId);
            setDeleteConfirm(null);
        } catch (err) {
            if (err.response?.status === 401) {
                alert('Session expired. Please login again.');
                navigate('/admin/login');
            } else if (err.response?.status === 404) {
                alert('Route not found');
            } else {
                alert(err.response?.data?.message || 'Failed to delete route');
            }
        } finally {
            setActionLoading(false);
        }
    };

    const handleEdit = (routeId) => {
        navigate(`/admin/edit-route/${routeId}`);
    };

    return (
        <div className="min-h-screen bg-[#F6F7F8] flex flex-col">
            <PageHeader title="Manage Routes" showBack={true} showSave={false} />
            
            <main className="p-4 flex-1">
                {loading && routes.length === 0 && (
                    <div className="flex flex-col items-center justify-center mt-20 gap-3">
                        <LoadingSpinner size={40} />
                        <p className="text-gray-500 font-medium">Loading routes...</p>
                    </div>
                )}
                
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4 text-center">
                        {error}
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    {!loading && !error && routes.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">No routes found.</p>
                    )}

                    {routes.map((route) => (
                        <div 
                            key={route.id} 
                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 overflow-hidden flex-1">
                                    <span className="font-semibold text-gray-800 truncate max-w-[35%]">
                                        {route.start_building}
                                    </span>
                                    <ArrowRight className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                    <span className="font-semibold text-gray-800 truncate max-w-[35%]">
                                        {route.end_building}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <button
                                        onClick={() => handleEdit(route.id)}
                                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Edit Route"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={() => setDeleteConfirm(route.id)}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete Route"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Delete Confirmation Modal */}
            {deleteConfirm && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl border border-gray-100">
                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                            <Trash2 className="text-red-500 w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">Delete Route?</h3>
                        <p className="text-gray-600 mb-6">Are you sure you want to delete this route? This action cannot be undone.</p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setDeleteConfirm(null)}
                                className="flex-1 py-3 px-4 border border-gray-200 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                                disabled={actionLoading}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleDelete(deleteConfirm)}
                                className="flex-1 py-3 px-4 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                disabled={actionLoading}
                            >
                                {actionLoading ? <LoadingSpinner size={18} className="text-white" /> : 'Delete'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageRoutes;
