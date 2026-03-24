import type { CollectionConfig } from 'payload'

import { isSuperAdminAccess } from '~/cms/access/user'

export const Tenants: CollectionConfig = {
  slug: 'tenants',
  access: {
    create: isSuperAdminAccess,
    update: isSuperAdminAccess,
    delete: isSuperAdminAccess,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'domain',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
}
