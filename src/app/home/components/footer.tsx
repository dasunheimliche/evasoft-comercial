export default function Footer() {
  return (
    <footer
      className="z-999 w-full safe-paddings relative mt-auto overflow-hidden  !text-gray-50 py-[2.5rem]"
      style={{
        background:
          "radial-gradient(70% 80% at center 0%, rgba(255, 255, 255, 0.06) 3%, rgba(98, 255, 179, 0) 70%, rgba(98, 255, 179, 0) 100%)",
      }}
    >
      <div className="relative mx-auto lg:max-w-none lg:px-8 md:px-4 w-[1296px] px-8 flex justify-between gap-x-10 pb-[51px] pt-10 xl:pt-9 lg:pb-9 sm:py-8 before:absolute before:-left-[20%] before:top-0 before:h-px before:w-[140%] before:opacity-10 before:[mask-image:linear-gradient(90deg,transparent_0%,black_40%,black_60%,transparent_100%);] dark:before:bg-white before:bg-gray-new-10">
        <div className="flex flex-col items-start justify-between max-lg:w-full max-lg:flex-row max-sm:flex-col max-sm:gap-y-5">
          <div className="mb-[30px] flex grow flex-col max-lg:mb-0 max-sm:w-full max-sm:flex-row max-sm:justify-between">
            <div className="flex grow flex-col items-start">
              <a className="block" href="/">
                <span className="sr-only">Evasoft</span>
                <img
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="116"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className="h-8 w-[116px] lg:h-7 lg:w-auto sm:h-[26px]"
                  style={{ color: "transparent" }}
                  src="images/eva-white.png"
                />
                {/* <img
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width="116"
                  height="32"
                  decoding="async"
                  data-nimg="1"
                  className=" dark:block h-8 w-[116px] lg:h-7 lg:w-auto sm:h-[26px]"
                  style={{ color: "transparent" }}
                  src="/_next/static/svgs/6da928883916f39a4848774319dcaf81.svg"
                /> */}
              </a>
              <a
                className="flex items-center justify-center gap-x-1.5 mt-auto lg:mt-8 md:mt-8"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                <span className="whitespace-nowrap text-sm leading-none tracking-extra-tight dark:text-white text-black-new">
                  All systems operational
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-x-1 gap-y-3 text-[13px] leading-none tracking-extra-tight text-gray-new-40 max-lg:flex-row max-lg:self-end max-lg:leading-tight max-sm:flex-col max-sm:self-start">
            <p>Made in Barcelona and the World</p>
            <p>
              <span>Copyright </span>Ⓒ 2024 Evasoft Inc.
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-[860px] justify-between xl:max-w-[623px] ">
          <div className="flex flex-col pt-3 xl:w-full">
            <span className="relative text-xs font-semibold uppercase leading-none tracking-normal dark:text-white text-gray-new-10">
              Company
            </span>
            <ul className="mt-7 flex grow flex-col gap-y-5">
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/about-us"
                >
                  About us
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/partners"
                >
                  Partners
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/case-studies"
                >
                  Case Studies
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/trust"
                >
                  Trust
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/contact-sales"
                >
                  Contact Sales
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/early-access-program"
                >
                  Early Access
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pt-3 xl:w-full">
            <span className="relative text-xs font-semibold uppercase leading-none tracking-normal dark:text-white text-gray-new-10">
              Resources
            </span>
            <ul className="mt-7 flex grow flex-col gap-y-5">
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/ai"
                >
                  AI
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/docs"
                >
                  Docs
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/guides"
                >
                  Community Guides
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/docs/changelog"
                >
                  Changelog
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/demos"
                >
                  Demos
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/docs/introduction/support"
                >
                  Support
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/docs/security/security-overview"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pt-3 xl:w-full">
            <span className="relative text-xs font-semibold uppercase leading-none tracking-normal dark:text-white text-gray-new-10">
              Community
            </span>
            <ul className="mt-7 flex grow flex-col gap-y-5">
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="x-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  x.com
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="linkedin-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  LinkedIn
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="github-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  GitHub
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="discord-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  Discord
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="discourse-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  Discourse
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="youtube-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  YouTube
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/creators"
                >
                  <span className="creators-icon inline-block h-4 w-4 transition-colors duration-200 group-hover:bg-primary-2 dark:bg-gray-new-70 dark:group-hover:bg-green-45 bg-gray-new-30"></span>
                  Creators
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pt-3 xl:w-full">
            <span className="relative text-xs font-semibold uppercase leading-none tracking-normal dark:text-white text-gray-new-10">
              Legal
            </span>
            <ul className="mt-7 flex grow flex-col gap-y-5">
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/dpa"
                >
                  DPA
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/subprocessors"
                >
                  Subprocessors List
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/privacy-guide"
                >
                  Privacy Guide
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/cookie-policy"
                >
                  Cookie Policy
                </a>
              </li>
              <li className="flex">
                <a
                  className="text-gray-new-30 transition-colors duration-200 hover:text-green-45 group relative flex items-center gap-2 whitespace-nowrap text-[15px] leading-none tracking-extra-tight dark:text-gray-new-70 dark:hover:text-green-45"
                  href="/business-info"
                >
                  Business Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
