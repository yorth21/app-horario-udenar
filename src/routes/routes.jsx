import { lazy } from 'react'

export const routes = [
  {
    path: 'login',
    element: lazy(async () => await import('@/pages/Auth/Login'))
  },
  {
    layout: lazy(async () => await import('@/pages/Shared/Layout')),
    children: [
      {
        path: '',
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: 'notes',
        element: lazy(async () => await import('@/pages/Notes'))
      }
    ]
  }
]
