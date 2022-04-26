import { createClient, createCurrentUserHook } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'
export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:'2021-10-21',

    useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config);
/** Get image url from sanity */
export const urlFor = (source) => imageUrlBuilder(config).image(source);

/** Get current user logged in */
export const useCurrentUser = createCurrentUserHook(config);
