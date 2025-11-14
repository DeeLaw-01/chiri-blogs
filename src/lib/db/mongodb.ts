import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

async function dbConnect() {
  // Handle missing MONGO_URI gracefully
  if (!MONGO_URI) {
    if (process.env.NODE_ENV === 'production') {
      throw new Error('MONGO_URI environment variable is required')
    }
    console.warn('Warning: MONGO_URI not found, skipping database connection')
    return null
  }

  // Return existing connection if available
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection
  }
  
  try {
    return await mongoose.connect(MONGO_URI)
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw error
  }
}

export default dbConnect
