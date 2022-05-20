interface User {
  id: string
  name: string
  password: string
  createdAt: Date
  updatedAt: Date
}

interface RegisterUser {
  name: string
  password: string
}

interface UserUI extends Omit<User, 'createdAt' | 'updatedAt'> {
  createdAt: string
  updatedAt: string
}
