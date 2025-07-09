import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { products as initialProducts } from './data/products';
import FilterSidebar from './components/FilterSidebar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';


function App() {
   const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: 'All',
    price: 300,
    rating: 0,
  });

  useEffect(() => {
    let tempProducts = [...products];

    // Filter by search term
    if (searchTerm) {
      tempProducts = tempProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === filters.category);
    }

    // Filter by price
    tempProducts = tempProducts.filter(p => p.price <= filters.price);
    
    // Filter by rating
    if (filters.rating > 0) {
      tempProducts = tempProducts.filter(p => p.rating >= filters.rating);
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, filters, products]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <div className="bg-highlight min-h-screen font-sans">

      <Header
       onSearch={setSearchTerm}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <main className="container mx-auto px-4 py-8">
         <div className="flex flex-col lg:flex-row">
           <FilterSidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onProductClick={setSelectedProduct}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500 text-xl">No products found.</p>
              )}
            </div>
          </div>
         </div>

      </main>
      <Footer/>
      <ProductModal/>
    </div>
  );
}

export default App;
