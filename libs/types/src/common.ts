export interface Pagination {
  page: number
  pageSize: number
  total: number
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: Pagination
}

export interface ApiError {
  message: string
  code?: string
}

export type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError }
