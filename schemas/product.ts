import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Produits",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du produit",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix (€)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    }),
    defineField({
      name: "materiau",
      title: "Matériau",
      type: "string",
    }),
    defineField({
      name: "delai",
      title: "Délai de fabrication",
      type: "string",
    }),
    defineField({
      name: "couleursDisponibles",
      title: "Couleurs disponibles",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isNew",
      title: "Nouveau produit",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "isBestseller",
      title: "Best-seller",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
    },
    prepare(selection) {
      const { title, media, subtitle } = selection;
      return {
        title,
        media,
        subtitle: subtitle ? `${subtitle} €` : undefined,
      };
    },
  },
});
