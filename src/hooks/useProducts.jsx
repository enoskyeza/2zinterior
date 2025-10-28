import { useState, useEffect } from 'react'
import axiosClient from '../lib/axios'

/**
 * Hook for fetching public products with filters
 */
export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [JSON.stringify(filters)])

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)

    try {
      // Build query string
      const params = new URLSearchParams()
      
      if (filters.category) params.append('category', filters.category)
      if (filters.search) params.append('search', filters.search)
      if (filters.featured !== undefined) params.append('featured', filters.featured ? 'true' : 'false')
      if (filters.sort_by) params.append('sort_by', filters.sort_by)
      if (filters.sort_order) params.append('sort_order', filters.sort_order)
      if (filters.page) params.append('page', filters.page)
      if (filters.per_page) params.append('per_page', filters.per_page)

      const queryString = params.toString()
      const url = queryString ? `/products?${queryString}` : '/products'

      const response = await axiosClient.get(url)
      
      setProducts(response.data.data)
      
      // Set pagination data if available
      if (response.data.links || response.data.meta) {
        setPagination({
          current_page: response.data.meta?.current_page || response.data.current_page,
          last_page: response.data.meta?.last_page || response.data.last_page,
          per_page: response.data.meta?.per_page || response.data.per_page,
          total: response.data.meta?.total || response.data.total,
        })
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch products')
    } finally {
      setLoading(false)
    }
  }

  return { products, loading, error, pagination, refetch: fetchProducts }
}

/**
 * Hook for fetching a single product
 */
export const useProduct = (id) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      fetchProduct()
    }
  }, [id])

  const fetchProduct = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.get(`/products/${id}`)
      setProduct(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch product')
    } finally {
      setLoading(false)
    }
  }

  return { product, loading, error, refetch: fetchProduct }
}

/**
 * Hook for admin product management
 */
export const useAdminProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = async (filters = {}) => {
    setLoading(true)
    setError(null)

    try {
      // Build query string
      const params = new URLSearchParams()
      
      if (filters.status) params.append('status', filters.status)
      if (filters.category) params.append('category', filters.category)
      if (filters.search) params.append('search', filters.search)
      if (filters.page) params.append('page', filters.page)
      if (filters.per_page) params.append('per_page', filters.per_page)

      const queryString = params.toString()
      const url = queryString ? `/admin/products?${queryString}` : '/admin/products'

      const response = await axiosClient.get(url)
      setProducts(response.data.data)
      
      // Extract pagination data from meta object (Laravel pagination structure)
      const meta = response.data.meta
      const pagination = {
        current_page: meta.current_page,
        last_page: meta.last_page,
        per_page: meta.per_page,
        total: meta.total,
        from: meta.from,
        to: meta.to,
      }
      
      return { success: true, data: response.data.data, pagination }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to fetch products'
      setError(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  const createProduct = async (productData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.post('/admin/products', productData)
      
      if (response.data.success) {
        // Add new product to the list
        setProducts(prev => [response.data.data, ...prev])
        return { success: true, data: response.data.data, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to create product'
      setError(message)
      return { 
        success: false, 
        message, 
        errors: err.response?.data?.errors 
      }
    } finally {
      setLoading(false)
    }
  }

  const updateProduct = async (id, productData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.put(`/admin/products/${id}`, productData)
      
      if (response.data.success) {
        // Update product in the list
        setProducts(prev => 
          prev.map(p => p.id === id ? response.data.data : p)
        )
        return { success: true, data: response.data.data, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update product'
      setError(message)
      return { 
        success: false, 
        message, 
        errors: err.response?.data?.errors 
      }
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.delete(`/admin/products/${id}`)
      
      if (response.data.success) {
        // Remove product from the list
        setProducts(prev => prev.filter(p => p.id !== id))
        return { success: true, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to delete product'
      setError(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  const restoreProduct = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.post(`/admin/products/${id}/restore`)
      
      if (response.data.success) {
        // Update product in the list
        setProducts(prev => 
          prev.map(p => p.id === id ? response.data.data : p)
        )
        return { success: true, data: response.data.data, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to restore product'
      setError(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  const toggleFeatured = async (id) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axiosClient.post(`/admin/products/${id}/toggle-featured`)
      
      if (response.data.success) {
        // Update product in the list
        setProducts(prev => 
          prev.map(p => p.id === id ? response.data.data : p)
        )
        return { success: true, data: response.data.data, message: response.data.message }
      }
      
      return { success: false, message: response.data.message }
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to toggle featured status'
      setError(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    restoreProduct,
    toggleFeatured,
  }
}
