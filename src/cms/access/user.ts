import { type Access } from 'payload'

export function isSuperAdmin(user: unknown): boolean {
  if (
    !!user &&
    typeof user === 'object' &&
    'roles' in user &&
    Array.isArray((user as { roles: unknown }).roles)
  ) {
    return (user as { roles: unknown[] }).roles.includes('super-admin')
  }

  return false
}

export const isSuperAdminAccess: Access = ({ req }) => {
  return isSuperAdmin(req.user)
}
