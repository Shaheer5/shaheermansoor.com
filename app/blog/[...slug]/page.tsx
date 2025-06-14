import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import { components } from '@/components/MDXComponents'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { sortPosts, coreContent, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Authors, Blog } from 'contentlayer/generated'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { notFound } from 'next/navigation'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
  try {
    const resolvedParams = await params
    const slug = decodeURI(resolvedParams.slug.join('/'))
    const post = allBlogs.find((p) => p.slug === slug)

    if (!post) {
      return undefined
    }

    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return coreContent(authorResults as Authors)
    })

    const publishedAt = new Date(post.date).toISOString()
    const modifiedAt = new Date(post.lastmod || post.date).toISOString()
    const authors = authorDetails.map((author) => author.name)
    let imageList = [siteMetadata.socialBanner]

    if (post.images) {
      imageList = typeof post.images === 'string' ? [post.images] : post.images
    }

    const ogImages = imageList.map((img) => {
      return {
        url: img.includes('http') ? img : siteMetadata.siteUrl + img,
      }
    })

    return {
      title: post.title,
      description: post.summary,
      openGraph: {
        title: post.title,
        description: post.summary,
        siteName: siteMetadata.title,
        locale: 'en_US',
        type: 'article',
        publishedTime: publishedAt,
        modifiedTime: modifiedAt,
        url: './',
        images: ogImages,
        authors: authors.length > 0 ? authors : [siteMetadata.author],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.summary,
        images: imageList,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return undefined
  }
}

export const generateStaticParams = async () => {
  try {
    const paths = allBlogs.map((p) => ({ slug: p.slug.split('/') }))
    return paths
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function Page({ params }: PageProps) {
  try {
    const resolvedParams = await params
    const slug = decodeURI(resolvedParams.slug.join('/'))

    // Filter out drafts in production
    const sortedCoreContents = allCoreContent(sortPosts(allBlogs))
    const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)

    if (postIndex === -1) {
      return notFound()
    }

    const prev = sortedCoreContents[postIndex + 1] || null
    const next = sortedCoreContents[postIndex - 1] || null
    const post = allBlogs.find((p) => p.slug === slug) as Blog

    if (!post) {
      return notFound()
    }

    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return coreContent(authorResults as Authors)
    })

    const mainContent = coreContent(post)
    const jsonLd = { ...post.structuredData }
    jsonLd['author'] = authorDetails.map((author) => {
      return {
        '@type': 'Person',
        name: author.name,
      }
    })

    const Layout = layouts[post.layout || defaultLayout]

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="mt-8">
          <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
            <MDXLayoutRenderer code={post.body.code} components={components} toc={post.toc} />
          </Layout>
        </div>
      </>
    )
  } catch (error) {
    console.error('Error rendering page:', error)
    return notFound()
  }
}
