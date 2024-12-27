import {defineField, defineType} from 'sanity'

export const portfolioEntryType = defineType({
  name: 'portfolioEntry',
  title: 'Portfolio Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
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
  ],
})
