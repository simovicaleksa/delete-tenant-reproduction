import type { CollectionConfig } from 'payload'

export const Settings: CollectionConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'config',
      type: 'radio',
      required: true,
      options: ['a', 'b'],
    },
  ],
}
