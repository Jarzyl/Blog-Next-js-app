import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { client } from "@/sanity/lib/client";

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
