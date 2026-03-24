import { tenantsArrayField } from '@payloadcms/plugin-multi-tenant/fields'
import type { CollectionConfig } from 'payload'

import { isSuperAdminAccess } from '~/cms/access/user'

const defaultTenantArrayField = tenantsArrayField({
  tenantsArrayFieldName: 'tenants',
  tenantsArrayTenantFieldName: 'tenant',
  tenantsCollectionSlug: 'tenants',
})

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: isSuperAdminAccess,
    update: isSuperAdminAccess,
    delete: isSuperAdminAccess,
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'roles',
      type: 'select',
      required: true,
      defaultValue: ['user'],
      hasMany: true,
      options: ['super-admin', 'user'],
    },
    {
      ...defaultTenantArrayField,
      admin: {
        ...(defaultTenantArrayField?.admin ?? {}),
        position: 'sidebar',
      },
    },
  ],
}
