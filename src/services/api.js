import axios from 'axios'
import toast from 'react-hot-toast'

// Create axios instance
const api = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    config.headers['X-Requested-At'] = Date.now()
    return config
  },
  (error) => {
    console.error('API Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message = 'An error occurred'
    
    if (error.response) {
      message = error.response.data?.message || `Server Error: ${error.response.status}`
    } else if (error.request) {
      message = 'Network error. Please check your connection.'
    } else {
      message = error.message || 'Unknown error occurred'
    }
    
    // Don't show toast for certain endpoints
    const skipToast = includes(error.response?.status)
    
    if (!skipToast) {
      toast.error(message)
    }
    
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

// Addiction service
export const addictionService = {
  getTypes: () => {
    return api.get('/addictions/types')
      .catch(error => {
        console.error('Error fetching addiction types:', error)
        throw error
      })
  },
  
  getAddiction: (addictionId) => {
    if (!addictionId) {
      throw new Error('Addiction ID is required')
    }
    return api.get(`/addictions/${addictionId}`)
      .catch(error => {
        console.error(`Error fetching addiction ${addictionId}:`, error)
        throw error
      })
  },
  
  search: (query) => {
    if (!query || query.trim().length === 0) {
      throw new Error('Search query is required')
    }
    return api.get(`/addictions/search/${encodeURIComponent(query.trim())}`)
      .catch(error => {
        console.error(`Error searching for "${query}":`, error)
        throw error
      })
  }
}

export default api
