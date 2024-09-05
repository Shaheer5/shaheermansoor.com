import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import OpenToWorkBadge from './ui/OpenToWorkBadge'
import SnowFall from './ui/SnowFall'

const Header = () => {
  return (
    <header
      className="supports-backdrop-blur dark:bg-dark/75 fixed left-0 right-0 z-50 bg-white/60 px-3 pb-4 pt-4 shadow-[0_0_10px_rgba(0,0,0,0.12)] backdrop-blur dark:bg-[#030712]/20
    dark:shadow-[0_0_24px_rgba(255,255,255,0.1)] sm:pb-10 xl:px-0
    "
    >
      <SnowFall />
      <div className="mx-auto flex max-w-4xl !items-center justify-between px-3 xl:max-w-5xl xl:px-0">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
          {siteMetadata.openToWork && (
            <OpenToWorkBadge classes={'absolute hidden sm:inline-block mt-2 z-10'} title={''} />
          )}
        </div>
        <div className="mt-0 flex items-center space-x-4 leading-5 sm:space-x-6 md:mt-4">
          {headerNavLinks
            // .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
