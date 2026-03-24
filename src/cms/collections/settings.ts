import type { CollectionConfig } from 'payload'

export const Settings: CollectionConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
  ],
}
