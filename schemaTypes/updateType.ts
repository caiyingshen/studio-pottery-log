import {defineField, defineType} from 'sanity'

export const updateType = defineType({
  name: 'update',
  title: 'Update',
  type: 'document',
  fields: [
    defineField({
      name: 'pieceIds',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'piece'}],
        },
      ],
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'notes',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
