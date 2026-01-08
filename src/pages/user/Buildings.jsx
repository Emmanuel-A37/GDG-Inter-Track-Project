import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import PageHeader from '../../components/common/PageHeader';
import Searchbar from '../../components/Searchbar';
import Item from '../../components/Item';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const Buildings = () => {
    const navigate = useNavigate();
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRoutes = useCallback(async (query) => {
        setLoading(true);
        setError(null);
        try {
            const endpoint = query ? `/routes/search?q=${encodeURIComponent(query)}` : '/routes';
            const response = await api.get(endpoint);
            if (response.data.success) {
                setRoutes(response.data.data);
            }
        } catch (err) {
            console.error('Error fetching routes:', err);
            setError('Failed to load routes');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchRoutes();
    }, [fetchRoutes]);

    return (
        <div className="min-h-screen bg-[#F6F7F8] flex flex-col">
            <PageHeader title="Buildings" showBack={true} showSave={false} />
            
            <div className="px-4">
                <Searchbar 
                    onSearch={fetchRoutes} 
                    placeholder="Search routes..." 
                />
            </div>

            <main className="p-4 flex-1">
                {loading && (
                    <div className="flex justify-center mt-10">
                        <LoadingSpinner />
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
                        <Item 
                            key={route.id} 
                            title={`${route.start_building} to ${route.end_building}`}
                            onClick={() => navigate(`/route-preview/${route.id}`)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Buildings;
